import { useLocation } from "react-router-dom";

export type NavigationLink = {
  link: string;
  label: string;
};

export enum Paths {
  PAGEONE = "/one",
  PAGETWO = "/two",
  PAGETREE = "/tree",
}

export const DefaultPath = Paths.PAGEONE;

export function useNavigationLinks() {
  const location = useLocation();
  //this function return current active link
  function isLinkActive(link: NavigationLink | string) {
    if (typeof link == "string") return location.pathname.startsWith(link);
    return location.pathname.startsWith(link.link);
  }

  const links: NavigationLink[] = [
    { link: Paths.PAGETREE, label: "api showcase" },
    { link: Paths.PAGETWO, label: "hook showcase" },
  ];
  //object to be destructured with { links, isLinkActive }
  return {
    links,
    isLinkActive,
  };
}
