import { Link } from "@remix-run/react";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuEye, LuMapPin } from "react-icons/lu";
import { RecentOrderCard } from "app/components/Product/RecentOrderCard";
import { recentOrders } from "app/mock/recentOrderData";

export default function Detatils(): JSX.Element {
  return (
    <>
      <div className="py-4 md:py-8 space-y-8">
        <h1 className="text-2xl md:text-5xl text-dark  text-center font-bold">Account Details</h1>
        <div className="grid  grid-cols-1  md:grid-cols-3  gap-4 py-4 px-2 md:px-6 w-full md:w-5/6 mx-auto">
          <div className="space-y-4">
            <h1 className="text-dark text-lg md:text-3xl font-semibold">Alex Martenis</h1>

            <div>
              <div className="flex gap-3 py-3">
                <MdOutlineMailOutline className="text-primary text-xl" />
                <div className="space-y-2">
                  <p>alex@marteni@gmail.com</p>
                  <Link to="#" className="text-base text-yellow">
                    Edit account info
                  </Link>
                </div>
              </div>

              <div className="flex  gap-3 py-3">
                <LuEye className="text-primary text-xl" />
                <div className="space-y-2">
                  <p>*********</p>
                  <Link to="/change-password" className="text-base text-yellow">
                    Change Password
                  </Link>
                </div>
              </div>
              <div className="flex gap-3 py-3">
                <LuMapPin className="text-primary text-xl" />
                <div className="space-y-2">
                  <p>Sydney, Australia</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <h1 className="text-dark text-lg md:text-2xl font-semibold">Your Recent Orders</h1>
            <hr className="text-lightGray mt-4  h-4 w-full" />
            <div>
              {recentOrders.map((orders) => (
                <RecentOrderCard key={orders.id}
                  id={0}
                  title={orders.title}
                  productImg={orders.productImg}
                  price={orders.price}
                  quantity={orders.quantity} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
