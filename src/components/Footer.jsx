import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { SiCodechef, SiLeetcode, SiGeeksforgeeks ,SiMinutemailer} from "react-icons/si";
import { FaLinkedinIn, FaYoutube, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-2 px-4 bg-slate-100 z-30 sm:flex items-center gap-2 border-t border-slate-200  sm:bg-white dark:bg-zinc-950 dark:border-zinc-800">
      <h1 className="flex justify-center items-center gap-2 pb-2 truncate">
        <span>Made by</span>
        <span className="text-xl font-medium tracking-tight truncate transition-colors dark:text-zinc-50">
          @NILAY SINGH
        </span>
      </h1>
      <div className="sm:ml-auto flex items-center justify-center gap-2 ">
        <Link to="https://www.linkedin.com/in/nilay-singh-b29a9a229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
          <Button variant="outline" size="icon">
            <FaLinkedinIn className="h-6 w-6" />
            <span className="sr-only">Linkedin</span>
          </Button>
        </Link>
        <Link to="https://github.com/sinnilay" target="blank">
          <Button variant="outline" size="icon">
            <FaGithub className="h-6 w-6" />
            <span className="sr-only">Github</span>
          </Button>
        </Link>
      
   
      
      </div>
    </footer>
  );
};

export default Footer;
