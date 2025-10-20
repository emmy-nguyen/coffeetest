import { FeatureCard } from "./FeatureCard";
import { ComputerIcon } from "./icons/ComputerIcon";
import { CustomizationIcon } from "./icons/CustomizationIcon";
import { ExportIcon } from "./icons/ExportIcon";
import { HassleFreeIcon } from "./icons/HassleFreeIcon";
import { InsightIcon } from "./icons/InsightIcon";
import { LimitIcon } from "./icons/LimitIcon";
import { MenuBarIcon } from "./icons/MenuBarIcon";
import { UnlimitedIcon } from "./icons/UnlimitedIcon";

export const FeaturedGrid = () => {
  const features = [
    {
      icon: <HassleFreeIcon />,
      title: "Hassle-free time tracking",
      highlighted: false,
    },
    {
      icon: <ComputerIcon />,
      title: "Perfect for freelancers",
      highlighted: true,
    },
    {
      icon: <InsightIcon />,
      title: "Useful insights and analytics",
      highlighted: false,
    },
    {
      icon: <ExportIcon />,
      title: "Quick export to CSV",
      highlighted: false,
    },
    {
      icon: <LimitIcon />,
      title: "Daily limits and notifications",
      highlighted: false,
    },
    {
      icon: <MenuBarIcon />,
      title: "Menubar extension",
      highlighted: false,
    },
    {
      icon: <CustomizationIcon />,
      title: "Playful customization",
      highlighted: false,
    },
    {
      icon: <UnlimitedIcon />,
      title: "Unlimited projects",
      highlighted: false,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-[132px]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-13 px-36 justify-center items-center">
        {features.map((feature, index) => (
          <div key={`feature-${index}`} className="relative">
            <FeatureCard icon={feature.icon} title={feature.title} />
            {feature.highlighted && (
              <svg
                width="175"
                height="54"
                viewBox="0 0 175 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-1 top-[110px] left-1/2 md:bottom-0 md:top-[105px] md:left-1/2 -translate-x-1/2 z-0"
              >
                <path
                  d="M1.96341 13.7985C17.6034 -10.6524 167.886 1.96325 174.246 24.6583C184.268 60.4242 47.5308 57.1727 28.0415 45.4675C27.3197 45.034 27.4378 44.2332 28.0415 44.4054C80.8567 59.4704 177.055 49.9545 168.905 24.6583C159.507 5.3881 5.53528 -8.398 4.91106 18.1338C4.50006 35.6029 73.4356 52.0571 123.303 46.8115C124.794 47.0282 123.62 47.9761 121.985 48.1771C68.5112 53.7754 -9.8396 37.1267 1.96341 13.7985Z"
                  fill="#7B61FF"
                />
              </svg>
            )}
          </div>
        ))}
      </div>

      {/* Mac button */}
      <div className="flex justify-center items-center mt-[110px]">
        <button className="flex gap-x-[10px] bg-black justify-center items-center p-5 rounded-2xl drop-shadow-2xl/50">
          <span>
            <svg
              width="18"
              height="22"
              viewBox="0 0 18 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.073 5.39971C12.5519 5.39971 12.0623 5.48058 11.604 5.64229C11.1458 5.79503 10.7326 5.95225 10.3642 6.11398C9.99584 6.27569 9.6724 6.35656 9.3939 6.35656C9.10639 6.35656 8.78295 6.28019 8.42358 6.12745C8.07319 5.97472 7.69585 5.82648 7.29154 5.68272C6.88725 5.53 6.456 5.45363 5.9978 5.45363C5.1353 5.45363 4.29975 5.69171 3.49116 6.16788C2.69155 6.63507 2.03569 7.33135 1.52358 8.25675C1.01147 9.17316 0.755417 10.3097 0.755417 11.6664C0.755417 12.9331 0.96655 14.1909 1.38882 15.4398C1.82006 16.6796 2.33666 17.7308 2.93862 18.5932C3.45972 19.321 3.96733 19.9454 4.46148 20.4666C4.95561 20.9876 5.53062 21.2481 6.18648 21.2481C6.61772 21.2481 6.99057 21.1762 7.30502 21.0325C7.62847 20.8888 7.96538 20.7451 8.31577 20.6013C8.67514 20.4576 9.11986 20.3857 9.64995 20.3857C10.198 20.3857 10.6337 20.4576 10.9572 20.6013C11.2806 20.7361 11.5951 20.8753 11.9005 21.019C12.206 21.1538 12.5969 21.2212 13.073 21.2212C13.7827 21.2212 14.3892 20.9517 14.8924 20.4126C15.4044 19.8735 15.8806 19.285 16.3208 18.6472C16.824 17.9104 17.1834 17.2411 17.3989 16.6392C17.6236 16.0372 17.7404 15.7183 17.7493 15.6824C17.7314 15.6734 17.5787 15.5925 17.2912 15.4398C17.0126 15.287 16.6892 15.0489 16.3208 14.7255C15.9614 14.3931 15.6425 13.9574 15.364 13.4182C15.0944 12.8792 14.9597 12.2234 14.9597 11.4507C14.9597 10.7769 15.0676 10.1974 15.2832 9.71222C15.4987 9.21808 15.7504 8.81379 16.0379 8.49933C16.3254 8.17589 16.5859 7.93331 16.8194 7.7716C17.0531 7.60089 17.1834 7.50207 17.2103 7.47511C16.7431 6.80128 16.2221 6.32062 15.647 6.03312C15.081 5.73664 14.56 5.55695 14.0838 5.49406C13.6075 5.43117 13.2707 5.39971 13.073 5.39971ZM12.3318 3.68819C12.6552 3.29289 12.9203 2.84367 13.1269 2.34054C13.3336 1.82843 13.4369 1.30284 13.4369 0.763779C13.4369 0.602063 13.4234 0.462806 13.3964 0.346008C12.8754 0.363977 12.3272 0.521203 11.7523 0.817683C11.1773 1.11417 10.7011 1.48702 10.3238 1.93624C10.0273 2.26866 9.76225 2.69093 9.52866 3.20304C9.29506 3.70617 9.17827 4.22725 9.17827 4.76632C9.17827 4.84717 9.18276 4.92354 9.19174 4.99542C9.20073 5.0673 9.20971 5.11671 9.2187 5.14366C9.30854 5.16163 9.40287 5.17062 9.5017 5.17062C9.97788 5.17062 10.481 5.03136 11.0111 4.75284C11.5412 4.46535 11.9814 4.11046 12.3318 3.68819Z"
                fill="white"
              />
            </svg>
          </span>
          <span className="font-bold text-base text-white leading-[19px]">
            Download for Mac
          </span>
          <span></span>
        </button>
      </div>
    </div>
  );
};
