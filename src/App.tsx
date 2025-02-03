import ContactLinks from "./components/ContactLinks";
import Profile from "./components/Profile";
import SocialLinks from "./components/SocialLinks";
import VacanciesLinks from "./components/VacanciesLinks";

export default function App() {
  return (
    <main className="mx-auto h-dvh max-w-md space-y-4 p-8 text-center text-white">
      <Profile />
      <SocialLinks />
      <VacanciesLinks />
      <ContactLinks />
    </main>
  );
}
