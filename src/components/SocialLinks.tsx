import Heading from "./Heading";

import Link from "./Link";
import supabaseClient from "../supabaseClient";
import { useEffect, useState } from "react";
import { Database } from "../types/database.types";

// const links = [
//   {
//     name: "instagram",
//     label: "Instagram",
//     icon: <Instagram />,
//     href: "https://www.instagram.com/mindstech.io/",
//   },
//   {
//     name: "linkedin",
//     label: "LinkedIn",
//     icon: <Linkedin />,
//     href: "https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F104574328%2Fadmin%2Finbox%2F",
//   },
//   {
//     name: "facebook",
//     label: "Facebook",
//     icon: <Facebook />,
//     href: "https://www.facebook.com/profile.php?id=61562789234111&locale=ru_RU",
//   },
//   {
//     name: "website",
//     label: "Website",
//     icon: <Globe />,
//     href: "https://mindstech.io/",
//   },
// ];

const fetchSocial = async () => {
  const { data } = await supabaseClient.from("social").select("*");

  return data;
};

export default function SocialLinks() {
  const [links, setLinks] = useState<
    null | Database["public"]["Tables"]["social"]["Row"][]
  >(null);

  useEffect(() => {
    fetchSocial().then((data) => {
      setLinks(data);
    });
  }, []);

  return (
    <div className="space-y-4">
      <Heading>Social Media</Heading>
      <div className="space-y-4">
        {links?.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            icon={link.icon_url}
            label={link.name}
          />
        ))}
      </div>
    </div>
  );
}
