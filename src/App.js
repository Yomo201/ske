import {Link} from "react-router-dom";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Alco from "./pages/Alcopage";
import Homepage from "./pages/Homepage";
import Exotic from "./pages/Exotic";
import Cocktails from "./pages/Cocktails";
import Logo from './logo.png'

function App() {
    const logoStyle = {
        width: '100px',
        height: '100px'
    }

  return (
      <div className='aaa'>
    < div className="App">
      <div className='nav'>
          <img style={logoStyle} src={Logo} alt=''/>
          <nav>
             <button className='button'> <Link to=''> home </Link> </button>
              <button className='button'> <Link to='/Alco'> alcohol </Link> </button>
             <button className='button'> <Link to='/Exotic'> exotic drink </Link> </button>
             <button className='button'> <Link to='/Cocktails'> cocktails </Link> </button>
              <button className='button'> <Link to=''> contact us </Link> </button>
          </nav>

          <Routes>
              <Route path='/' element={<Homepage/>}/>
              <Route path='/Alco' element={<Alco/>}/>
              <Route path='/Exotic' element={<Exotic/>}/>
              <Route path='/Cocktails' element={<Cocktails/>}/>
          </Routes>
      </div>
    </div>
      </div>);
}

export default App;
