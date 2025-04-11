import { Mail, MessageCircle, Phone, Send } from "lucide-react";
import Heading from "./Heading";
import Link from "./Link";

const messengers = [
  {
    name: "telegram",
    label: "Telegram",
    href: "https://t.me/mindstechio",
    icon: <Send />,
  },
  {
    name: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/992715011111",
    icon: <MessageCircle />,
  },
];

const contacts = [
  {
    name: "email",
    label: "E-Mail",
    href: "mailto:info@mindstech.io",
    icon: <Mail />,
  },
  {
    name: "phone",
    label: "Phone number",
    href: "tel:+992715011111",
    icon: <Phone />,
  },
];

export default function ContactLinks() {
  return (
    <div className="text-milk space-y-4">
      <Heading>Contact Us</Heading>
      <div className="grid grid-cols-2 gap-4">
        {messengers.map((messenger) => (
          <Link variant="secondary" {...messenger} />
        ))}
      </div>
      <div className="space-y-4">
        {contacts.map((contact) => (
          <Link
            key={contact.name}
            label={contact.label}
            href={contact.href}
            icon={contact.icon}
          />
        ))}
      </div>
    </div>
  );
}
