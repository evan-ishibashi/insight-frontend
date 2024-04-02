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
          <li>
            <Link to="/listings/all">Listings</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </>
      );
    }

    export default NavBar;