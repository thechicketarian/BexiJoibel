import { useLocation } from "react-router-dom";

function Footer() {
  //hides footer on the homepage
  const { pathname } = useLocation();
  // console.log(pathname);
  if (pathname === "/" ) return null;

  const { DateTime } = require("luxon");

  const currentYear = DateTime.now().year;

  return (
    <>
    <footer className="container">
       <h4> © {currentYear} bx/flo</h4>
      <a
        className="resumeDownload footerLinks"
        href="https://www.linkedin.com/in/bexi-joibel/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
      <a className="footerLinks" href="mailto:bexijoibel@gmail.com">Contact</a>
    </footer>
    </>
  );
}

export default Footer;
