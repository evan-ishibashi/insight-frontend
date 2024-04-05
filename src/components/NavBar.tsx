import { NavLink, Link } from "react-router-dom";

/** NavBar: displays navbar
 *
 * Props:
 * - logout()
 * - currUser {}
 *
 */
function NavBar() {
    /** renders if user is not logged in */


      return (
        <>
          <ol className="flex w-full flex-wrap items-center justify-between px-1">

          <li className="">
            <Link to="/home"><img src="../assets/logo/png/logo-no-background.png" alt="" /></Link>
          </li>
          <li className="">
            <Link to="/listings">Listings</Link>
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