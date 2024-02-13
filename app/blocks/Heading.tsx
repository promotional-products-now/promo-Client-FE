interface Headingprops {
  title?: string;
  subtitle?: string;
  secondarysubtitle?: string;
  price?: string;
  center?: boolean;
  home?: boolean
}

const Heading: React.FC<Headingprops> = ({ title, subtitle, center, secondarysubtitle, price, home }) => {
  return (
    <div className={center ? `text-center` : `text-start `}>
      <div className={home ? "text-white":"font-light text-blue mt-2"}>{subtitle}</div>

      <div className={home ? "text-white text-[30px] ":"text-[32px]  font-bold text-titletext"}>{title}</div>
      <div className="flex flex-col">
        <div className="font-light text-textcolor mt-2 text-[16px] ">{secondarysubtitle}</div>
        <div className="font-light text-white mt-2 text-[16px]">{price}</div>
      </div>
    </div>
  );
};

export default Heading;
