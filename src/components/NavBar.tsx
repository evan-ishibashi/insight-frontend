import { NavLink, Link } from "react-router-dom";
import logo from '../assets/logo/png/logo-no-background.png'

/** NavBar: displays navbar
 *
 * Props:
 * - logout()
 * - currUser {}
 *
 */
function NavBar() {


      return (
        <>
          <ol className="flex w-full items-center justify-around px-1 h-20 fixed top-0 z-10 bg-slate-50">

          <li className="">
            <a href="/"><img src={logo} alt="site-logo" className="h-16" /></a>
          </li>
          <li className="">
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/listings/fb">FB Listings</Link>
          </li>
          <li>
            <Link to="/listings/offerup">Offerup Listings</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          </ol>
        </>
      );
    }

    export default NavBar;