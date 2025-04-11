import { useEffect, useState } from "react";

import ContactLinks from "./components/ContactLinks";
import Profile from "./components/Profile";
import SocialLinks from "./components/SocialLinks";
import Fall from "./components/Fall";

export default function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 10000);
  }, []);

  return (
    <main className="border-dark text-primary mx-auto flex min-h-dvh max-w-md flex-col justify-between space-y-4 px-8 pt-8 pb-4 text-center sm:border">
      {show && <Fall />}
      <div className="space-y-5">
        <Profile />
        <SocialLinks />
        <ContactLinks />
      </div>
      <p className="text-milk">
        Powered by <a href="https://react.dev/">React</a>
      </p>
    </main>
  );
}
