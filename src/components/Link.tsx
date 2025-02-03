type Props = {
  href: string;
  label: string;
  icon?: string;
  variant?: "primary" | "secondary";
};

export default function Link({
  href,
  icon,
  label,
  variant = "primary",
}: Props) {
  if (variant === "primary") {
    return (
      <a
        href={href}
        className="bg-dark relative flex justify-center gap-4 rounded-xl"
      >
        {icon && (
          <div className="border-dark-border absolute top-0 left-0 border-r p-4">
            <img className="fill-milk stroke-milk" src={icon} alt={label} />
          </div>
        )}
        <span className="grow py-4 text-center font-medium">{label}</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      className="bg-dark flex flex-col items-center justify-center rounded-xl px-4 py-2"
    >
      <div>{icon}</div>
      <span className="grow text-center font-medium">{label}</span>
    </a>
  );
}
