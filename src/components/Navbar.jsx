import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="py-3 px-20 bg-gray-200">
      <ul className="flex gap-10">
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>About</Link></li>
        <li><Link to={"/contact"}>Contact</Link></li>
        <li><Link to={"/user"}>User</Link></li>
        <li><Link to={"/auth"}>Login</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
