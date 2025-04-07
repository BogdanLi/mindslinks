import { useEffect, useState } from "react";

import ContactLinks from "./components/ContactLinks";
import Profile from "./components/Profile";
import SocialLinks from "./components/SocialLinks";
import Fall from "./components/Fall";

export default function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 5000);
  }, []);

  return (
    <main className="border-dark mx-auto flex min-h-dvh max-w-md flex-col justify-between space-y-4 px-8 pt-8 pb-4 text-center text-white sm:border">
      {show && <Fall />}
      <div className="space-y-5">
        <Profile />
        <SocialLinks />
        <ContactLinks />
      </div>
      <p>
        Powered by <a href="https://react.dev/">React</a>
      </p>
    </main>
  );
}
