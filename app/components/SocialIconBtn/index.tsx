import React, { ElementType } from "react";

interface SocialShareButtonProps {
  IconBtn: ElementType;
  Icon: ElementType;
  href: string;
  color: string;
}

const SocialShareButton: React.FC<SocialShareButtonProps> = ({ IconBtn, Icon, href, color }) => {
  return (
    <div>
      <IconBtn url={href} className={`p-2 bg-[${color}]`}>
        <Icon size={42} />
      </IconBtn>
    </div>
  );
};

export default SocialShareButton;
