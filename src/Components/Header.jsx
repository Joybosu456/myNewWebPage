import { useNavigate } from "react-router-dom"
import "../assets/css/header.css"
import "../assets/css/workpage.css"

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="headercontainer">
            <span className="name">JOY BASU</span>
            <div >
              <ul className="menubar" data-animation="to-top">
                <li onClick={() => navigate("/")}>

                  <span>Home</span>
                  <span>
                    <i class="fa-solid fa-house" aria-hidden="true"></i>
                  </span>

                </li>
                <li onClick={() => navigate("/about")}>
                  {/* <a href="/about"> */}
                  <span>About</span>
                  <span>
                    <i class="fa-solid fa-address-card" aria-hidden="true"></i>
                  </span>
                  {/* </a> */}
                </li>
                <li>
                  <li onClick={() => navigate("/workpage")}>
                    {/* <a href="/workpage"> */}
                    <span>Work</span>
                    <span>
                      <i class="fa-solid fa-list-check" aria-hidden="true"></i>
                    </span>
                  </li>
                </li>
                <li>
                <li onClick={() => navigate("/contactpage")}>
                  {/* <a href="/contactpage"> */}
                    <span>Contact</span>
                    <span>
                      <i class="fa-solid fa-phone" aria-hidden="true"></i>
                    </span>
                  </li>
                </li>
              </ul>
            </div>
          </div>

        </div>


      </header>

    </>
  )
}
export default Header