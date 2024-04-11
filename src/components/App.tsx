import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import NavBar from './NavBar';

function App() {

  return (
    <div className='bg-slate-200 mt-20'>
      <BrowserRouter>
          <NavBar/>
          <RoutesList/>
      </BrowserRouter>
    </div>
  );
}

export default App;
