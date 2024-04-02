import { Routes, Route, Navigate } from "react-router-dom";
import ListingsPage from "./ListingsPage.tsx";
import Home from "./Home.tsx";
import About from "./about.tsx";


/** RoutesList: All routes.
 *
 */

function RoutesList() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/listings' element={<ListingsPage/>} />
        <Route path='/listings/:source' element={<ListingsPage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}

export default RoutesList;