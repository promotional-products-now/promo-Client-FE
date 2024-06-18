import { Tooltip, TooltipProps } from "@nextui-org/react";

type CustomTooltipProps = {
  title: string;
  isSnapped: boolean;
} & TooltipProps;

export const CustomTooltip = (props: CustomTooltipProps) => {
  return (
    <Tooltip
      {...props}
      placement="right"
      content={props.isSnapped && <span className="text-xs">{props.title}</span>}
      className={`${!props.isSnapped && "hidden"}`}
    >
      {props.children}
    </Tooltip>
  );
};
