import "./index.css";


function Navbar({auth}) {

  return (
    <div className="container__navbar">
      <nav className="navbar">
        <span>
          <a href="/">React Login App</a>
        </span>
        <ul className="items__navbar">
          {!auth ? (
            <>
              <li>
                <a href="/register">Sing Up</a>
              </li>
              <li>
                <a href="/login">Sign In</a>
              </li>
            </>
          ) : (
            <li>
              <a href="/logout">Log Out</a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
