import React, { ElementType } from "react";

interface SocialShareButtonProps {
  IconBtn: ElementType;
  Icon: ElementType;
  href: string;
  color: string;
}

const SocialShareButton: React.FC<SocialShareButtonProps> = ({ IconBtn, Icon, href, color }) => {
  return (
    <IconBtn url={href} className={` overflow-hidden rounded-[0.4rem] p-2 bg-[${color}]`}>
      <Icon size={42} />
    </IconBtn>
  );
};

export default SocialShareButton;
