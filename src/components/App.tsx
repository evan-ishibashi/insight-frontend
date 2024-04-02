import { BrowserRouter, Navigate } from 'react-router-dom';
import RoutesList from './RoutesList';
import NavBar from './NavBar';

function App() {

  return (
    <div>
      <BrowserRouter>
          <NavBar/>
          <RoutesList/>
      </BrowserRouter>
    </div>
  );
}

export default App;
