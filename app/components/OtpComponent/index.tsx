import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form } from "@remix-run/react";
import { Button, Input } from "@nextui-org/react";
import { resendOtp, validateOtpApi } from "app/api/auth.api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type OTPFormData = {
  otp: string;
};

export default function OtpComponent({
  email,
  callBackFn,
}: {
  email: string;
  callBackFn: (arg: any) => void;
}) {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OTPFormData>();
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft === 0) return;
    const timerId = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  const handleResendOtp = async () => {
    setTimeLeft(60);
    try {
      await resendOtp(email);
      toast.success("An OTP has been sent to your email");
    } catch (err) {
      toast.error("An error occurred while resending OTP");
    }
  };

  const onSubmit: SubmitHandler<OTPFormData> = async (data, e) => {
    setIsSubmitting(true);
    try {
      const response = await validateOtpApi({ email, otp: data.otp });
      callBackFn(response);
      toast.success("OTP verified successfully");
    } catch (err) {
      toast.error("An error occurred while verifying OTP");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-8 px-4 flex flex-col items-center">
      <ToastContainer />
      <h1 className="text-2xl md:text-3xl font-bold text-center">Enter OTP</h1>
      <Form method="post" id="otpForm" className="mx-auto my-4" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          variant="underlined"
          isInvalid={!!errors?.otp?.message}
          labelPlacement="outside"
          size="lg"
          placeholder="Enter OTP"
          color="primary"
          {...register("otp", { required: "OTP is required" })}
          errorMessage={errors?.otp?.message}
        />
        <div className="flex justify-center items-center">
          <Button
            type="submit"
            disabled={isSubmitting}
            variant="solid"
            color="primary"
            className="mt-4 mx-auto w-full"
            isLoading={isSubmitting}
          >
            {isSubmitting ? "Verifying..." : "Verify OTP"}
          </Button>
        </div>
      </Form>
      <div className="mt-4 flex justify-between items-center gap-4">
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
