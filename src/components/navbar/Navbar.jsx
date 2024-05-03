import { LuSchool } from "react-icons/lu";
import { FiHome } from "react-icons/fi";
import { FaRegFolderClosed } from "react-icons/fa6";
import { ImStopwatch } from "react-icons/im";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="left">
    {/* <LuSchool /> */}
    <div className="grid">
      <div className="text">
        <p className="main-menu">Main Menu</p>
      </div>
      <button className="btn">
        <p><FiHome /></p>
        <p>Home</p>
      </button>
      <button className="btn">
        <p><FaRegFolderClosed /></p>
        <p>Curriculum</p>
      </button>
      <button className="btn">
        <p><LuSchool /></p>
        <p>Schools</p>
      </button>
      <button className="btn">
        <p><ImStopwatch /></p>
        <p>Subscriptions</p>
      </button>
    </div>
    <div className="bottom">
      <div className="user">
        <div className="status">
          <img src="profile.svg" alt="" />
          <div className="bottom-title">
            <p className="bottom-main-title">Noia Gomez</p>
            <p className="bottom-subtitle">noiagomez23</p>
          </div>

        </div>
        <div className="completed">
          <div className="card">
            <div className="completed-status">80% Completed!</div>
            <div className="completed-status-title">Complete your profile setup</div>
          </div>
          <div className="forward-arrow">
            <MdOutlineKeyboardDoubleArrowRight />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar