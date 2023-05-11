import { Outlet } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import SideBarComponent from "./components/SideBarComponent";
import styled from "styled-components";

axios.defaults.baseURL = "http://localhost:5050";

function App() {
  return (
    <Container>
      <ToastContainer />
      <SideBarComponent />
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  /* min-height: 100vh;
  display: flex;
  /* align-items: center; */
  /* justify-content: space-between; */ */
`;

export default App;
