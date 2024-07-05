import { useLoaderData } from "@remix-run/react";
import { Link } from "@remix-run/react";
import { json } from "@remix-run/react";
import { FiPhoneCall } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export async function loader() {
  return json({ ENV: { SALES_CONTACT: process.env.SALES_CONTACT } });
}

const ContactDetails = () => {
  const data = useLoaderData<typeof loader>();

  const SALESCONTACT = data.ENV.SALES_CONTACT;

  return (
    <div>
      <h2 className="mb-2 text-lg font-bold text-black dark:text-white">Contact Details</h2>
      <div className="">
        <div className="flex items-center gap-2 mb-2">
          <FaMapMarkerAlt className="text-primary text-2xl" />
          <h2 className="text-xs font-semibold text-black">SHOWROOM AND OFFICE</h2>
        </div>
        <div className="">
          <p className="text-xs text-gray font-normal">
            Upper Floor, Unit 9/8 Ave of the America Newington NSW2127, Australia
          </p>
          <h2 className="text-xs font-semibold text-black pt-3">POSTAL ADDRESS</h2>
          <p className="text-xs text-gray font-normal">
            Promotional Products Now Pty Ltd P.O Box 6373 SILVER WATER NSW 2128
          </p>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <MdEmail className="text-primary text-2xl" />
          <Link
            to="mailto:sales@promotionalproductsnow.com.au"
            className="text-xs font-normal text-gray line-clamp-2"
          >
            sales@promotionalproductsnow.com.au
          </Link>
        </div>
        <div className="flex items-center gap-4 mb-2">
          <FiPhoneCall className="text-primary text-lg" />
          <Link to={`tel:+${SALESCONTACT}`} className="text-xs font-normal text-gray">
            +{SALESCONTACT}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
