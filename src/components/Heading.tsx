type Props = {
  children: React.ReactNode;
};

export default function Heading({ children }: Props) {
  return <h1 className="text-2xl font-bold">{children}</h1>;
}
