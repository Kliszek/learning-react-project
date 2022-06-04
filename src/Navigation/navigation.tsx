import { useState } from "react";
import { Link } from "react-router-dom";
import { NavRouteItem, NavRoutes } from "./routes";

export const Navigation = () => {
  const [showNavigation, setShowNavigation] = useState<boolean>(false);

  return (
    <nav className="mt-0 mb-10 w-full bg-slate-700 border-b border-slate-600">
      <ul className="flex flex-col text-sm md:flex-row md:text-lg lg:text-2xl justify-center md:gap-0 lg:gap-5 xl:gap-10">
        <li>
          <button className="md:hidden" onClick={()=>setShowNavigation(!showNavigation)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </li>
        {NavRoutes.map((item:NavRouteItem) => 
          <li className={`${showNavigation?'block':'hidden'} md:block`} key={item.key}>
            <Link to={item.address} onClick={()=>setShowNavigation(false)} className="flex flex-row items-center justify-center gap-2 px-10 py-3 hover:underline hover:bg-slate-800 duration-200">
              {item.icon && <>{ item.icon }</> }
              {item.name}
            </Link>
          </li>
          )}
      </ul>
    </nav>
  );
}