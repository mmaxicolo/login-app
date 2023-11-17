import "./index.css";

function Navbar() {
  return (
    <div className="container__navbar">
        <nav className="navbar">
            <span>React Login App</span>
            <ul className="items__navbar">
                <li>
                    <a href="">Sing Up</a>
                </li>
                <li>
                    <a href="">Sign In</a>
                </li>
                <li>
                    <a href="">Log Out</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;