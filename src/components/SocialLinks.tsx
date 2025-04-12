import Heading from "./Heading";

import { Instagram, Linkedin, Facebook, Globe } from "lucide-react";
import Link from "./Link";

const links = [
  {
    name: "instagram",
    label: "Instagram",
    icon: <Instagram />,
    href: "https://www.instagram.com/mindstech.io/",
  },
  {
    name: "linkedin",
    label: "LinkedIn",
    icon: <Linkedin />,
    href: "https://www.linkedin.com/company/mindsedtech/",
  },
  {
    name: "facebook",
    label: "Facebook",
    icon: <Facebook />,
    href: "https://www.facebook.com/profile.php?id=61562789234111&locale=ru_RU",
  },
  {
    name: "website",
    label: "Сайт",
    icon: <Globe />,
    href: "https://mindstech.io/",
  },
];

export default function SocialLinks() {
  return (
    <div className="text-milk space-y-4">
      <Heading>Социальные сети</Heading>
      <div className="space-y-4">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            icon={link.icon}
            label={link.label}
          />
        ))}
      </div>
    </div>
  );
}
