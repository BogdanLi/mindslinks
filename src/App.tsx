import ContactLinks from "./components/ContactLinks";
import Profile from "./components/Profile";
import SocialLinks from "./components/SocialLinks";
import VacanciesLinks from "./components/VacanciesLinks";

export default function App() {
  return (
    <main className="border-dark mx-auto h-dvh max-w-md space-y-4 p-8 text-center text-white sm:border">
      <Profile />
      <SocialLinks />
      <VacanciesLinks />
      <ContactLinks />
    </main>
  );
}
