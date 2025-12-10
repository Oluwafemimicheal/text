import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import ControlForm from "./components/ControlForm";


const App = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Navbar />
     <ControlForm/>
    </div>
  )
}

export default App;