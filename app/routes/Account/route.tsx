import { json, Link, MetaFunction, redirect, useLoaderData } from "@remix-run/react";
import { Divider } from "@nextui-org/react";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { FaEyeSlash } from "react-icons/fa";
import { RecentOrderCard } from "app/components/Product/RecentOrderCard";
import { recentOrders } from "app/mock/recentOrderData";
import { SEOHandle } from "@nasa-gcn/remix-seo";
import { fetchUserAccountDetailsApi } from "app/api/user.api";
import { getSession } from "app/sessions";

export const meta: MetaFunction = () => {
  return [
    { title: "Details | Promotional Products Now " },
    { name: "description", content: "Welcome to Promotional Products Now" },
  ];
};
export const handle: SEOHandle = {
  getSitemapEntries: () => null,
};

export async function loader({ request }: any) {
  const session = await getSession(request.headers.get("Cookie"));
  const userUid = session.get("uid");

  if (!userUid) {
    return redirect("/login");
  }

  const userDetails = await fetchUserAccountDetailsApi(userUid as string);
  if (!userDetails) {
    throw new Response("Not found", { status: 404 });
  }
  return json(userDetails.data);
}

const maskPassword = (password: string) => {
  return "*".repeat(password.length / 3);
};
export default function Detatils(): JSX.Element {
  const userDetails = useLoaderData<typeof loader>();

  const maskedPassword = maskPassword(userDetails.password);

  return (
    <>
      <div className="py-4 md:py-8 space-y-8">
        <h1 className="text-2xl md:text-3xl text-dark  text-center font-bold">Account Details</h1>
        <div className="grid  grid-cols-1  md:grid-cols-3  gap-4 py-4 px-2 md:px-6 w-full mx-auto">
          <div className="space-y-4">
            <h1 className="text-dark text-lg md:text-xl  xl:text-3xl font-semibold">
              {userDetails.firstName} {userDetails.lastName}
            </h1>

            <div>
              <Divider className="w-3/4" />
              <div className="flex gap-3 py-3">
                <MdOutlineMailOutline className="text-primary text-xl" />
                <div className="space-y-2">
                  <p>{userDetails.email.address}</p>
                  <Link to="#" className="text-base text-yellow font-semibold">
                    Edit account info
                  </Link>
                </div>
              </div>
              <Divider className="w-3/4" />
              <div className="flex  gap-3 py-3">
                <FaEyeSlash className="text-primary text-xl" />
                <div className="space-y-2">
                  <p>{maskedPassword}</p>
                  <Link to="/change-password" className="text-base text-yellow font-semibold">
                    Change Password
                  </Link>
                </div>
              </div>
              <Divider className="w-3/4" />
              <div className="flex gap-3 py-3">
                <LuMapPin className="text-primary text-xl" />
                <div className="space-y-2">
                  <p>{userDetails.location.address},</p>
                  <p>{userDetails.location.city},</p>
                  <p>{userDetails.location.state},</p>
                  <p>
                    {userDetails.location.country}, {userDetails.location.postCode}
                  </p>
                </div>
              </div>
              <Divider className="my-4 w-3/4" />
            </div>
          </div>
          <div className="col-span-2">
            <h1 className="text-dark text-lg md:text-xl xl:text-2xl font-semibold">
              Your Recent Orders
            </h1>
            <hr className="text-lightGray mt-4  h-4 w-full" />
            <div>
              {recentOrders.map((orders) => (
                <RecentOrderCard
                  key={orders.id}
                  id={0}
                  title={orders.title}
                  productImg={orders.productImg}
                  price={orders.price}
                  quantity={orders.quantity}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
