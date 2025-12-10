import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import ControlForm from "./components/ControlForm";


const App = () => {
  return (
    <div className="h-screen flex justify-center items-center">
     <ControlForm/>
    </div>
  )
}

export default App;