import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form, useActionData } from "@remix-run/react";
import { ActionFunction, json, redirect } from "@remix-run/node";
import { getSession, commitSession } from "../../sessions";
import { Button, Input } from "@nextui-org/react";
import { validatOtpApi } from "app/api/auth.api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type OTPFormData = {
  otp: string;
};

type ActionData = {
  error?: string;
};

export const action: ActionFunction = async ({ request }) => {
  try {
    const session = await getSession(request.headers.get("Cookie"));
    const cookieHeader = request.headers.get("Cookie");
    // const cookie = (await userPrefs.parse(cookieHeader)) || {};
    // console.log();
    const formData = await request.formData();
    const otp = formData.get("otp") as string;

    if (!otp) {
      return json({ error: "OTP is required" }, { status: 400 });
    }
    console.log();
    const email = session.get("email");
    const uid = session.get("uid");
    console.log({ uid, email, session: session });
    if (!email) {
      return json({ error: "Email not found in session" }, { status: 400 });
    }

    // Validate OTP here (add your own logic)
    const response = await validatOtpApi({ email, otp });
    console.log({ data: response.data });
    if (response && response.data) {
      const { accessToken, user } = response.data;
      session.set("accessToken", accessToken);
      session.set("uid", user._id);
      return redirect("/", {
        headers: {
          "Set-Cookie": await commitSession(session),
        },
      });
    }

    return json({ error: "Invalid OTP" });
  } catch (error) {
    console.error("Error in OTP validation:", error);
    return json({ error: "An unexpected error occurred" }, { status: 500 });
  }
};

export default function OtpPage() {
  const actionData = useActionData<ActionData>();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<OTPFormData>();
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft === 0) return;
    const timerId = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  const handleResendOtp = async () => {
    setTimeLeft(60);
    // Add logic to resend OTP here
  };

  const onSubmit: SubmitHandler<OTPFormData> = async (data, e) => {
    const form = document.getElementById("otpForm") as HTMLFormElement;

    if (form && e) {
      e.preventDefault();
      form.submit();
    }
  };

  useEffect(() => {
    if (actionData?.error) {
      toast.error(actionData.error);
    }
  }, [actionData]);

  return (
    <div className="py-8 px-4 flex flex-col items-center">
      <ToastContainer />
      <h1 className="text-2xl md:text-3xl font-bold text-center">Enter OTP</h1>
      <Form
        method="post"
        id="otpForm"
        className="mx-auto my-4"
        onSubmit={() => handleSubmit(onSubmit)()}
      >
        <Input
          type="text"
          variant="underlined"
          isInvalid={!!errors?.otp?.message}
          labelPlacement="outside"
          size="lg"
          placeholder="Enter OTP"
          color="primary"
          {...register("otp")}
          errorMessage={errors?.otp?.message}
        />
        {errors?.otp && <p className="text-red-500 text-center mx-auto">{errors.otp.message}</p>}
        <div className="flex justify-center items-center">
          <Button
            type="submit"
            disabled={isSubmitting}
            variant="solid"
            color="primary"
            className="mt-4 mx-auto"
          >
            Verify OTP
          </Button>
        </div>
      </Form>
      <div className="mt-4">
        <p>{timeLeft > 0 ? `Resend OTP in ${timeLeft} seconds` : "Didn't receive the OTP?"}</p>
        {timeLeft === 0 && (
          <Button variant="solid" color="primary" onClick={handleResendOtp}>
            Resend OTP
          </Button>
        )}
      </div>
    </div>
  );
}
