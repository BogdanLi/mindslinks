import { useState } from "react";
import ContactLinks from "./components/ContactLinks";
import Profile from "./components/Profile";
import SocialLinks from "./components/SocialLinks";
import VacanciesLinks from "./components/VacanciesLinks";
import Snowfall from "react-snowfall";

export default function App() {
  const [isSnowing, setIsSnowing] = useState(false);

  if (new Date().getMonth() <= 1 || new Date().getMonth() === 11) {
    setTimeout(() => {
      setIsSnowing(true);
    }, 10000);
  }

  return (
    <main className="border-dark mx-auto h-dvh max-w-md space-y-4 p-8 text-center text-white sm:border">
      {isSnowing && (
        <Snowfall
          style={{ zIndex: 999 }}
          speed={[0.2, 0.2]}
          snowflakeCount={100}
        />
      )}
      <Profile />
      <SocialLinks />
      <VacanciesLinks />
      <ContactLinks />
    </main>
  );
}
