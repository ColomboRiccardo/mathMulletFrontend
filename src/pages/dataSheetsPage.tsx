import { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";

import WeaponListElement from "../components/weaponListElement";
import { getWeapons } from "../api/fetchCalls";

const DatasheetsPage = () => {
  const { pageNumber, totalPages, weaponsCount }: any = useLoaderData();

  const [weapons, setWeapons] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const weapons = await getWeapons(pageNumber);
      setWeapons(weapons);
    })();
  }, [pageNumber]);

  return (
    <>
      <section className="m-12 mt-20">
        <h2>Welcome to the datasheet page</h2>
        <h3>
          Here you can find a list of all available stats for weapons and units
          in Warhammer 40k
        </h3>
      </section>
      <main className="w-10/12 m-auto bg-white rounded-2xl">
        <section className="h-20 grid grid-cols-2 items-stretch">
          <div className=" bg-gray-800 rounded-l-2xl flex justify-center items-center">
            <h3 className="text-3xl font-bold uppercase text-slate-50">
              Weapons
            </h3>
          </div>
          <div className=" bg-gray-800 rounded-r-2xl flex justify-center items-center">
            <h3 className="text-3xl font-bold uppercase text-slate-50">
              Units
            </h3>
          </div>
        </section>
        <div className=" text-left m-2 grid grid-cols-12 px-4">
          <span className="uppercase text-lg font-semibold col-span-3">
            filters
          </span>
        </div>
        <div className="text-left m-2 grid grid-cols-12 px-4">
          <span className="uppercase text-lg font-semibold col-span-3">
            weapon_name
          </span>
          <span className="uppercase font-semibold">type</span>
          <span className="grid grid-cols-6 col-span-3">
            <span className="uppercase font-semibold">range</span>
            <span className="uppercase font-semibold">atk</span>
            <span className="uppercase font-semibold">skill</span>
            <span className="uppercase font-semibold">str</span>
            <span className="uppercase font-semibold">AP</span>
            <span className="uppercase font-semibold">dmg</span>
          </span>
          <span className="uppercase font-semibold col-span-4">keywords</span>
          <span className="uppercase font-semibold col-span-1 justify-self-end mr-4">
            +
          </span>
        </div>
        <ul className="m-2">
          {weapons.map((weapon) => (
            <WeaponListElement key={weapon.id} {...weapon} />
          ))}
        </ul>
      </main>
      <section className="w-6/12 m-auto my-4 text-slate-50 font-semibold">
        <ul className="flex flex-row justify-between">
          <li>
            <span>-</span>
          </li>
          {paginationFunction(totalPages as number)}
          <li>
            <span>+</span>
          </li>
        </ul>
      </section>
    </>
  );
};

const paginationFunction = (count: number) => {
  const paginationArray = [];
  for (let i = 1; i <= count; i++) {
    paginationArray.push(
      <li key={i}>
        <Link to={`/datasheets/page/${i}`}>
          <span>{i}</span>
        </Link>
      </li>
    );
  }
  return paginationArray;
};

export default DatasheetsPage;
