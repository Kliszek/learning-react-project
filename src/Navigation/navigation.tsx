import { Link } from "react-router-dom";
import { NavRouteItem, NavRoutes } from "./routes";
//import { NavRouteItem, NavRoutes } from "./routes";

export const Navigation = () => {
  return (
    <nav className="absolute top-0 w-full bg-slate-700 border-b border-slate-600">
      <ul className="flex flex-row justify-center gap-10">
        {NavRoutes.map((item:NavRouteItem) => 
          <li key={item.key} className="px-10 py-3 hover:underline hover:bg-slate-800 duration-200">
            <Link to={item.address}>{item.name}</Link>
          </li>
          )}
      </ul>
    </nav>
  );
}