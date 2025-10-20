import { ReactElement } from "react";

interface FeatureCardProps {
  icon: ReactElement;
  title: string;
  highlighted?: boolean;
}
export const FeatureCard = ({ icon, title }: FeatureCardProps) => {
  return (
    <div className="flex flex-col gap-y-3 justify-between items-center">
      <div className="my-3">{icon}</div>
      <div className="text-center font-bold text-[28px] leading-[33.6px]">
        {title}
      </div>
    </div>
  );
};
