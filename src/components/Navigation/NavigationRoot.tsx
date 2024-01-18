import { ReactNode } from "react";

interface NavigationProps {
  children : ReactNode
}

export const NavigationRoot = ({ children} : NavigationProps) => {
  return (
    <nav className="flex items-center gap-4">
      {children}
    </nav>
  );
}

