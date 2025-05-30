import { FC } from 'react';
import clsx from 'clsx'; // optional: for cleaner class merging

type FeaturedTagProps = {
  className?: string;
};

export const FeaturedTag: FC<FeaturedTagProps> = ({ className }) => {
  return (
    <span
      className={clsx(
        'px-4 py-2 bg-gradient-to-r from-[#EE29E8] to-[#2FEBE9] rounded-full text-sm font-bold text-white glow-gradient',
        className,
      )}
    >
      FEATURED
    </span>
  );
};
