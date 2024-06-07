import { ContactIcon, LockIcon, SettingsIcon, UsersIcon } from "lucide-react";
import Section from "../Section";
import ServiceCard, { ServiceCardProps } from "./card";

const services: Array<ServiceCardProps> = [
  {
    icon: <LockIcon />,
    header: "Secure Insurance Protection",
    paragraph: `We offer the most secure, comprehensive, and imaginative insurance protection available.`,
  },
  {
    icon: <UsersIcon />,
    header: "Diverse Clientele",
    paragraph: `Serving industrialists, merchants, entrepreneurs, and government parastatals.`,
  },
  {
    icon: <ContactIcon />,
    header: "Expertise Assitance",
    paragraph: `Our expertise allows us to assist clients in achieving their objectives while protecting against financial risks.`,
  },

  {
    icon: <SettingsIcon />,
    header: "Tailored Solutions",
    paragraph: `Providing solutions that meet clients' needs with absolute integrity, high standards of business conduct, and skilled professional service.`,
  },
];

const ServiceContent = () => {
  return (
    <Section className="py-20 bg-stone-50">
      <div className="flex flex-col w-full gap-4 items-center">
        <h1 className="text-[2rem] text-epic_primary lg:text-4xl text-center capitalize font-semibold ">
          Services provided <span className="text-epic_secondary">epic</span>
        </h1>

        <p className="text-sm text-center">
          EPIC Insurance Brokers offers the most secure, comprehensive, and
          imaginative insurance protection available.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8">
          {services.map((service) => {
            return <ServiceCard key={service.header} {...service} />;
          })}
        </div>
      </div>
    </Section>
  );
};

export default ServiceContent;
