import { Typography } from "../ui/typography";
interface NavigationLinkProps {
  path : string 
  children?: React.ReactNode;
  active?: boolean;
}

export const NavigationLink = ({ path, children, active = false} : NavigationLinkProps) => {

  return (
    <Typography variant={"h3"}>

      {}
      <a className={`text-sm font-medium transition-colors hover:text-primary ${ active ? 'text-primary' : 'text-muted-foreground'}`}  href={path}>
    
       {children}
      
      </a>
    </Typography>
  );
}



