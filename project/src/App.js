import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Topbar from './components/topbar/Topbar'
import GlobalRouter from "./components/GlobalRouter";
import './App.css';

const App = () => {

  return (
    <BrowserRouter>
      <Topbar />
      <Navbar />
      <GlobalRouter />
    </BrowserRouter>
  );
}

export default App;
