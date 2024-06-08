import { FileQuestion, Mail, MessageSquare, Phone } from "lucide-react";
import Link from "next/link";
import Section from "../Section";

const details = [
  {
    icon: FileQuestion,
    name: "Help Center",
    sub: "Get question? We have got answer",
    link: "mailto:your-email@example.com",
  },
  {
    icon: Mail,
    name: "Email Us",
    sub: "Get question? We have got answer",
    link: "mailto:your-email@example.com",
  },
  {
    icon: MessageSquare,
    name: "Chat with us",
    sub: "Get question? We have got answer",
    link: "https://your-chat-link.example.com",
  },
  {
    icon: Phone,
    name: "Call Us Now",
    sub: "Get question? We have got answer",
    link: "tel:+1234567890",
  },
];
const Contact = () => {
  return (
    <Section id="contact" className="py-20">
      <div className="flex flex-col w-full gap-8 items-center justify-center">
        <h1 className="text-[2rem] lg:text-4xl font-semibold text-epic_primary ">
          Contact Us
        </h1>
        <p className="text-sm text-epic_primary">
          Feel free to contact us? submit your queries here and we will listen
        </p>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {details.map((dets) => {
            return (
              <div
                key={dets.name}
                className="flex items-center gap-3 p-3 border rounded-lg"
              >
                <div className="h-8 w-8 p-2 rounded-md bg-epic_secondary/25 text-epic_primary flex items-center justify-center">
                  <dets.icon />
                </div>
                <div className="flex flex-col justify-between">
                  <span className="text-[12px] font-bold">{dets.name}</span>
                  <span className=" text-[10px] lg:text-[12px] ">
                    {dets.sub}
                  </span>
                </div>

                <Link href={dets.link}>
                  <button className="ml-auto btn text-white min-h-0 h-10 bg-epic_secondary rounded-md border-none shadow-none">
                    Contact us
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
