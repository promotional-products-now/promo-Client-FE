import { IconType } from "react-icons";

interface Buttonprops {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  secondaryColor?: boolean
}

const Button = ({ label, disabled, outline, small, icon: Icon, onClick, secondaryColor }: Buttonprops) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full text-center capitalize 
    ${outline ? `bg-white ` : `bg-blue`} 
    ${outline ? `text-titletext ` : `text-white`} 
    ${small ? `py-1 ` : `py-3`}
    ${small ? `px-3` : `px-3`}
    ${small ? `text-sm ` : `text-md`}
    ${small ? `font-light ` : `font-semibold`}
    ${small ? `border-[1px]` : `border-[2px]`}
    ${secondaryColor ? `bg-yellow`: `bg-blue`}
    `}
    >
      {Icon && <Icon className="absolute left-[4rem] top-4" />}
      {label}
    </button>
  );
};

export default Button;
