import Snowfall from "react-snowfall";
import ContactLinks from "./components/ContactLinks";
import Profile from "./components/Profile";
import SocialLinks from "./components/SocialLinks";
import VacanciesLinks from "./components/VacanciesLinks";

import { useState } from "react";

export default function App() {
  const [isSnowing, setIsSnowing] = useState(false);

  if (new Date().getMonth() <= 1 || new Date().getMonth() === 11) {
    setTimeout(() => {
      setIsSnowing(true);
    }, 10000);
  }

  return (
    <main className="border-dark mx-auto min-h-dvh max-w-md space-y-4 px-8 py-4 text-center text-white sm:border">
      {isSnowing && <Snowfall snowflakeCount={100} speed={[0.3, 0.3]} />}
      <Profile />
      <SocialLinks />
      <VacanciesLinks />
      <ContactLinks />
      <p>Powered by React</p>
    </main>
  );
}
