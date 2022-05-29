import { About } from "../About";
import { InputForm } from "../InputForm";
import { Policy } from "../Policy";

export interface NavRouteItem {
  key: number;
  name: string;
  address: string;
  component: JSX.Element;
};

export const NavRoutes: NavRouteItem[] = [
  {key:1, name: "Home", address:"/", component: <InputForm username=''/> },
  {key:2, name: "About", address:"/about", component: <About />},
  {key:3, name: "Form", address:"/form", component: <InputForm username=''/>},
  {key:4, name: "Policy", address:"/policy", component: <Policy />}
];