import Button from "app/blocks/Button";
import Heading from "app/blocks/Heading";
import Container from "app/components/Container";
import { FiShoppingCart } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";

const Partners = () => {
  return (
    <div className="bg-backgroundgray p-6 mt-5">
      <Container>
        <div className="mt-[62px] px-[100px] flex flex-col justify-center items-center gap-[32px]">
          <Heading title="We are Promotional Promotional Products Now" center />

          <div className="flex flex-col gap-5">
            <p className="text-textcolor text-[16px] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, rerum hic. Quasi
              dicta, quo temporibus consequatur atque, ex ad natus commodi cum eius itaque excepturi
              voluptas qui numquam id? Saepe!
            </p>

            <p className="text-textcolor text-[16px]   text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, rerum hic. Quasi
              dicta, quo temporibus consequatur atque, ex ad natus commodi cum eius itaque excepturi
              voluptas qui numquam id? Saepe!
            </p>

            <p className="text-textcolor text-[16px] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, rerum hic. Quasi
              dicta, quo temporibus consequatur atque, ex ad natus commodi cum eius itaque excepturi
              voluptas qui numquam id? Saepe!
            </p>
          </div>

          <div className="flex flex-row gap-8 w-[50%]">
            <Button label="Shop Now" icon={FiShoppingCart} />
            <Button label="Contact Us" icon={FiPhoneCall} secondaryColor />
          </div>

          <div className="mt-[62px] flex flex-col gap-[40px]">
            <Heading
              title="You are fully protected"
              center
              secondarysubtitle="We are bound by the code of conduct of the Australian Promotional Products Association"
            />

            <img src="/images/Group.png" alt="appa" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Partners;
