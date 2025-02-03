import Heading from "./Heading";
import Link from "./Link";

const links = [
  {
    name: "b2b",
    href: "https://vazifa.tj/xYRdGv60bDz",
    label: "B2B Manager",
  },
];

export default function VacanciesLinks() {
  return (
    <div className="space-y-4">
      <Heading>Vacancies</Heading>
      <div>
        {links.map((link) => (
          <Link key={link.name} label={link.label} href={link.href} />
        ))}
      </div>
    </div>
  );
}
