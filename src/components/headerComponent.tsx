import React from "react";
import { Outlet, Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <>
      <header className="h-12 w-full fixed backdrop-blur-3xl bg-black/25 z-50">
        <ul className="h-full flex justify-around items-center">
          <li className="text-slate-50 font-bold uppercase">
            <Link to={"/"}>MathHammer</Link>
          </li>
          <li className="text-slate-50 font-bold uppercase">Competitions</li>
          <li className="text-slate-50 font-bold uppercase">Statistics</li>
          <li className="text-slate-50 font-bold uppercase">
            <Link to={"datasheets/page/1"}>Datasheets</Link>
          </li>
          <li className="text-slate-50 font-bold uppercase">Simulate</li>
          <li className="text-slate-50 font-bold uppercase">News</li>
          <li className="text-slate-50 font-bold uppercase">Forum</li>
          <li className="text-slate-50 font-bold uppercase">Donate</li>
          <li className="text-slate-50 font-bold uppercase">Uploads</li>
          <li className="text-slate-50 font-bold uppercase">Login</li>
          <li className="text-slate-50 font-bold uppercase">Language</li>
        </ul>
      </header>
      <Outlet />
    </>
  );
};

export default HeaderComponent;
