import picture from "../assets/pfp.jpeg";
import Heading from "./Heading";

export default function Profile() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <img
        src={picture}
        alt="profile picture"
        className="aspect-square w-24 rounded-full"
      />
      <div className="my-4 text-center">
        <Heading>MindsTech.io</Heading>
        <p>Школа непрерывного развития</p>
      </div>
      <div className="h-0.5 w-full bg-white" />
    </div>
  );
}
