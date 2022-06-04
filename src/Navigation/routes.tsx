import { About } from "../About";
import { Home } from "../Home";
import { InputForm } from "../InputForm";
import { Policy } from "../Policy";
import { ReactComponent as HomeIcon } from "../svg/home.svg";
import { ReactComponent as AboutIcon } from "../svg/question-mark.svg";
import { ReactComponent as FormIcon } from "../svg/pen.svg";
import { ReactComponent as PolicyIcon } from "../svg/document.svg";

export interface NavRouteItem {
  key: number;
  name: string;
  address: string;
  icon?: JSX.Element;
  component: JSX.Element;
}

export const NavRoutes: NavRouteItem[] = [
  {
    key: 1,
    name: "Home",
    address: "/",
    icon: <HomeIcon />,
    component: <Home />,
  },
  {
    key: 2,
    name: "About",
    address: "/about",
    icon: <AboutIcon />,
    component: <About />,
  },
  {
    key: 3,
    name: "Form",
    address: "/form",
    icon: <FormIcon />,
    component: <InputForm username="" />,
  },
  {
    key: 4,
    name: "Policy",
    address: "/policy",
    icon: <PolicyIcon />,
    component: <Policy />
  },
];
