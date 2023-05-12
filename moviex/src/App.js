import { Outlet } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import NavBarComponent from "./components/NavBarComponent";
import FooterComponent from "./components/FooterComponent";

axios.defaults.baseURL = "http://localhost:5050";

function App() {
  return (
    <div>
      <ToastContainer />
      <NavBarComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
}

export default App;
