import { ReactElement } from "react";

interface FeatureCardProps {
  icon: ReactElement;
  title: string;
  highlighted: boolean;
}
export const FeatureCard = ({ icon, title, highlighted }: FeatureCardProps) => {
  return (
    <>
      <div>{icon}</div>
      <div>{title}</div>
    </>
  );
};
