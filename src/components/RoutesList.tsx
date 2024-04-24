import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home.tsx";
import About from "./about.tsx";
import ListingsPage from "./ListingsPage.tsx";
import ChartPage from "./ChartPage.tsx";


/** RoutesList: All routes.
 *
 */

function RoutesList() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/listings' element={<ListingsPage/>} />
        <Route path='/listings/:site' element={<ListingsPage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/data' element={<ChartPage/>} />
        <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}

export default RoutesList;