import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import { Link, Form, json, useLoaderData, redirect } from "@remix-run/react";
import { useForm } from "react-hook-form";
import { ActionFunction, MetaFunction } from "@remix-run/node";
import { yupResolver } from "@hookform/resolvers/yup";
import { EditAccountSchema } from "app/schema/editAccountInfo.schema";
import { statesData, cityData } from "app/mock/signUpData";
import { SEOHandle } from "@nasa-gcn/remix-seo";
import { getSession } from "app/sessions";
import { fetchUserAccountDetailsApi, updateUserDetailsApi } from "app/api/user.api";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Edit Account | Promotional Products Now " },
    { name: "description", content: "Welcome to Promotional Products Now" },
  ];
};

export const handle: SEOHandle = {
  getSitemapEntries: () => null,
};

export async function loader({ request }: any) {
  const session = await getSession(request.headers.get("Cookie"));
  const uid = session.get("uid");

  if (!uid) {
    return redirect("/login");
  }

  const { data } = await fetchUserAccountDetailsApi(uid);
  if (!data) {
    throw new Response("User Not found", { status: 404 });
  }

  return json({ user: data });
}

interface ActionData {
  success: boolean;
  error?: string;
}

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const uid = session.get("uid");

  const formData = await request.formData();
  const email = formData.get("email") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const phone = formData.get("phone") as string;
  const address1 = formData.get("address1") as string;
  const address2 = formData.get("address2") as string;
  const city = formData.get("city") as string;
  const state = formData.get("state") as string;
  const postCode = formData.get("postCode") as string;

  try {
    const response = await updateUserDetailsApi(uid as string, {
      email,
      firstName,
      lastName,
      phone,
      location: {
        address1,
        address2,
        city,
        state,
        postCode,
      },
    });

    return json({ success: true } as ActionData);
  } catch (error: any) {
    return json({ success: false, error: error.message } as ActionData);
  }
};

export default function EditAccount(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const loaderData = useLoaderData<typeof loader>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditAccountSchema>({
    defaultValues: {
      email: loaderData?.user?.email?.address || "",
      firstName: loaderData?.user?.firstName || "",
      lastName: loaderData?.user?.lastName || "",
      phone: loaderData?.user?.phone || "",
      address1: loaderData?.user?.location?.address || "",
      city: loaderData?.user?.location?.city || "",
      state: loaderData?.user?.location?.state || "",
      postCode: loaderData?.user?.location?.postCode || "",
    },
    resolver: yupResolver(EditAccountSchema),
  });

  const onSubmit = async () => {
    setIsSubmitting(true);
    const form = document.getElementById("editUserForm") as HTMLFormElement;

    if (form) {
      form.submit();
    }
    // The form submission is handled by Remix <Form>, no additional logic needed here
  };

  return (
    <>
      <div className="py-8">
        <div className="space-y-4 px-2">
          <h1 className="text-xl md:text-4xl text-dark font-bold text-center">
            Edit Account Information
          </h1>
        </div>

        <Form
          id="editUserForm"
          method="post"
          onSubmit={handleSubmit(onSubmit)}
          className="w-full  overflow-hidden py-4 px-4 md:py-12 flex flex-col items-center justify-center"
        >
          <div className="w-full md:w-4/5 xl:w-3/5 2xl:w-2/4  overflow-hidden py-4 md:py-8 space-y-4">
            <div className="flex flex-col sm:flex-row  gap-4 ">
              <div className="w-full">
                <p className="text-base font-bold text-dark">FIRST NAME</p>
                <Input
                  type="text"
                  variant="underlined"
                  labelPlacement="outside"
                  size="lg"
                  placeholder="Your first name"
                  color="primary"
                  {...register("firstName")}
                  errorMessage={errors?.firstName?.message}
                />
              </div>
              <div className="w-full">
                <p className="text-base font-bold text-dark">LAST NAME</p>
                <Input
                  type="text"
                  variant="underlined"
                  labelPlacement="outside"
                  size="lg"
                  placeholder="Your last name"
                  color="primary"
                  {...register("lastName")}
                  errorMessage={errors?.lastName?.message}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <p className="text-base font-bold text-dark">EMAIL ADDRESS</p>
                <Input
                  type="email"
                  variant="underlined"
                  labelPlacement="outside"
                  size="lg"
                  placeholder="Your email"
                  color="primary"
                  {...register("email")}
                  errorMessage={errors?.email?.message}
                />
              </div>
              <div className="w-full">
                <p className="text-base font-bold text-dark">PHONE</p>
                <Input
                  type="text"
                  variant="underlined"
                  labelPlacement="outside"
                  size="lg"
                  placeholder="Your phone"
                  color="primary"
                  {...register("phone")}
                  errorMessage={errors?.phone?.message}
                />
              </div>
            </div>

            <div className="w-full">
              <p className="text-base font-bold text-dark">ADDRESS 1</p>
              <Input
                type="text"
                variant="underlined"
                labelPlacement="outside"
                size="lg"
                placeholder="Your complete address"
                color="primary"
                {...register("address1")}
                errorMessage={errors?.address1?.message}
              />
            </div>

            <div className="w-full">
              <p className="text-base font-bold text-dark">ADDRESS 2</p>
              <Input
                type="text"
                variant="underlined"
                labelPlacement="outside"
                size="lg"
                placeholder="Your complete address"
                color="primary"
                {...register("address2")}
                errorMessage={errors?.address2?.message}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="w-full">
                <p className="text-base font-bold text-dark">SUBURB</p>
                <Select
                  aria-label="city"
                  variant="underlined"
                  placeholder="Your city"
                  color="primary"
                  size="lg"
                  {...register("city")}
                  errorMessage={errors?.city?.message}
                >
                  {cityData.map((city) => (
                    <SelectItem key={city.value} value={city.value}>
                      {city.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className="w-full">
                <p className="text-base font-bold text-dark">STATE</p>
                <Select
                  aria-label="state"
                  variant="underlined"
                  placeholder="Your state"
                  color="primary"
                  size="lg"
                  {...register("state")}
                  errorMessage={errors?.state?.message}
                >
                  {statesData.map((state) => (
                    <SelectItem key={state.value} value={state.value}>
                      {state.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>

            <div>
              <p className="text-base font-bold text-dark">POST CODE</p>
              <Input
                type="text"
                variant="underlined"
                labelPlacement="outside"
                size="lg"
                placeholder="Your post code"
                color="primary"
                {...register("postCode")}
                errorMessage={errors?.postCode?.message}
              />
            </div>

            <div className="py-8 w-full mx-auto flex flex-wrap md:flex-nowrap justify-between gap-8">
              <Button
                type="button"
                variant="solid"
                className="bg-yellow text-white font-bold w-full"
                size="lg"
                radius="none"
              >
                <Link to="/account">Back to Account</Link>
              </Button>
              <Button
                type="submit"
                isLoading={isSubmitting}
                disabled={isSubmitting}
                variant="solid"
                color="primary"
                className="font-bold w-full"
                size="lg"
                radius="none"
              >
                Update Details
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}
