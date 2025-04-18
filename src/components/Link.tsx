type Props = {
  href: string;
  label: string;
  icon?: React.ReactNode;
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
          <div className="border-dark-border text-milk absolute top-0 left-0 border-r p-4">
            {icon}
          </div>
        )}
        <span className="text-milk grow py-4 text-center font-medium">
          {label}
        </span>
      </a>
    );
  }

  return (
    <a
      href={href}
      className="bg-dark flex flex-col items-center justify-center rounded-xl px-4 py-2"
    >
      <div className="text-milk">{icon}</div>
      <span className="text-milk grow text-center font-medium">{label}</span>
    </a>
  );
}
