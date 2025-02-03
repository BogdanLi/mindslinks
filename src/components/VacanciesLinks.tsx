import { useEffect, useState } from "react";
import Heading from "./Heading";
import Link from "./Link";
import supabaseClient from "../supabaseClient";
import { Database } from "../types/database.types";
import { PacmanLoader } from "react-spinners";

const fetchVacancies = async () => {
  const { data } = await supabaseClient.from("vacancies").select();

  return data;
};

export default function VacanciesLinks() {
  const [vacancies, setVacancies] = useState<
    Database["public"]["Tables"]["vacancies"]["Row"][] | null
  >(null);

  useEffect(() => {
    fetchVacancies().then((data) => setVacancies(data));
  }, []);

  return (
    <div className="space-y-4">
      <Heading>Vacancies</Heading>
      <div>
        {!vacancies ? (
          <div className="flex justify-center">
            <PacmanLoader color="#fcecdf" />
          </div>
        ) : (
          vacancies.map((link) => (
            <Link key={link.id} label={link.name} href={link.url} />
          ))
        )}
      </div>
    </div>
  );
}
