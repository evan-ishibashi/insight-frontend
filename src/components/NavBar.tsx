import { Link } from "react-router-dom";
import logo from '../assets/logo/png/logo-no-background.png';

/** NavBar: displays navbar
 *
 */
function NavBar() {


  return (
    <>
      <ol className="flex text-xs w-full items-center justify-around px-1 h-20 fixed top-0 z-10 bg-slate-50 md:text-sm">

        <li className="">
          <a href="/"><img src={logo} alt="site-logo" className="h-8 xl:h-16 lg:h-16 md:h-12 sm:h-10" /></a>
        </li>
        <li className="">
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/listings/fb">Facebook</Link>
        </li>
        <li>
          <Link to="/listings/offerup">Offerup</Link>
        </li>
        <li>
          <Link to="/parts">Parts</Link>
        </li>
        <li>
          <Link to="/data">Data</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

      </ol>
    </>
  );
}

export default NavBar;