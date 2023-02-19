import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar"
import Menu from './Pages/Menu';
import About from './Pages/About';
import Home from './Pages/Home';
import Order from './Pages/Orderonline';
import Reservations from './Pages/Reservations';
import Footer from './Footer';

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />

      break;
    case "/Menu":
      component = <Menu />
      break


    case "/About":
      component = <About />
      break

      break
    case "/Order-online":
      component = <Order />
      break
    case  "/Reservations":
      component = <Reservations />
      break
  }
  return (
  <>
    <Navbar />
    {component}
    <Footer />
  </>

  )

}

export default App;
