import { useState } from "react";

import Heading from "./Heading";

import picture from "../assets/pfp.jpeg";

export default function Profile() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="relative h-24 w-24">
        {!loaded && (
          <div className="absolute top-0 left-0 z-10 h-24 w-24 animate-pulse rounded-full bg-gray-300" />
        )}
        <img
          src={picture}
          alt="profile picture"
          className="aspect-square w-24 rounded-full"
          onLoad={() => setLoaded(true)}
        />
      </div>
      <div className="my-4 text-center">
        <Heading>MindTech.io</Heading>
        <p>Школа непрерывного развития</p>
      </div>
      <div className="h-0.5 w-full bg-white" />
    </div>
  );
}
