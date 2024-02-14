import { useEffect } from "react";
import Table from "../components/atoms/table/table";
import ProfileCard from "../components/organisms/profile-card/profile-card";
import HomeTemplate from "../components/templates/home-template/home-template";

const HomeContainer: React.FC = () => {
  const getTables = () => {
    fetch("https://posapimarket.azurewebsites.net/api/table")
      .then((res) => res.json)
      .then((res) => {
        console.log(res);
      });
  };

  useEffect(() => {
    getTables();
  }, []);
  const tables = [
    { name: "Mesa 1", status: "PENDING" },
    { name: "Mesa 2", status: "ACTIVE" },
    { name: "Mesa 3", status: "PENDING" },
    { name: "Mesa 4", status: "PENDING" },
    { name: "Mesa 5", status: "PENDING" },
    { name: "Mesa 6", status: "ACTIVE" },
    { name: "Mesa 7", status: "PENDING" },
    { name: "Mesa 8", status: "PENDING" },
    { name: "Mesa 9", status: "PENDING" },
    { name: "Mesa 10", status: "PENDING" },
    { name: "Mesa 11", status: "PENDING" },
    { name: "Mesa 12", status: "PENDING" },
    { name: "Mesa 13", status: "PENDING" },
    { name: "Mesa 14", status: "PENDING" },
  ];
  return (
    <HomeTemplate>
      <header>
        <ProfileCard />
      </header>
      <main className="mt-5 py-5 px-3 md:px-6 bg-white rounded-lg shadow">
        <section className="flex flex-wrap justify-between gap-3 md:gap-6">
          {tables.map((table, i) => (
            <Table key={i} status={table.status} label={table.name} />
          ))}
        </section>
      </main>
    </HomeTemplate>
  );
};

export default HomeContainer;
