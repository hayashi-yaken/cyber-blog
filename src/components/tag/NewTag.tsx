import clsx from "clsx";
import { FC } from "react";

type NewTagProps = {
  className?: string;
};

export const NewTag: FC<NewTagProps> = ({ className }) => {
  return (
    <span
      className={clsx(
        "px-3 py-1 bg-[#EE29E8]/20 backdrop-blur-sm border border-[#EE29E8]/30 rounded-full text-xs text-[#EE29E8] font-medium glow-pink",
        className,
      )}
    >
      NEW
    </span>
  );
};
