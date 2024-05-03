import Navbar from "../navbar/Navbar";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { MdArrowBack } from "react-icons/md";
import { FaRegPlayCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import Request from "../request/Request"
import Curriculum from "../curriculum/Curriculum";
import Modal from "../modal/Modal.jsx"
import { connect } from 'react-redux';
import { addSchool } from "../../redux/actions/SchoolActions";
import "./school.css";
import Pagination from "../pagination/Pagination.jsx";

const School = ({ schools, addSchool }) => {
  const [request, setRequest] = useState(true);
  const [curriculumtab, setCurriculumtab] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    const storedSchools = JSON.parse(localStorage.getItem('schools'));
    if (storedSchools) {
      // If there are schools in local storage, dispatch an action to add them to Redux state
      storedSchools.forEach(school => addSchool(school));
    }
  }, [addSchool]);


  const requestHandler = () => {
    setRequest(true);
    setCurriculumtab(false);
  }

  const curriculumHandler = () => {
    setRequest(false);
    setCurriculumtab(true);
  }

  return (
    <div className="container-school">
      <Navbar />
      <div className="right">
        <div className="topbar">
          <div className="left-topbar">
            <span className="arrowback"><MdArrowBack /></span>
            <p>Schools</p>
          </div>
          <div className="right-topbar">
            <button className="tour">
              <FaRegPlayCircle style={{ fontSize: "larger", color: "#4D8EFF" }} />
              Take a Tour
            </button>
            <button onClick={() => {
              setModalOpen(true);
            }}>Add New</button>

            {modalOpen && <Modal setOpenModal={setModalOpen} />}
          </div>
        </div>
        <div className="choice">
          <button onClick={requestHandler}>Request
            <p>03</p>
          </button>
          <button onClick={curriculumHandler}>Curiculums
            <p>03</p>
          </button>
        </div>
        <div className="table">
          {request && <Request />}
          {curriculumtab && <Curriculum />}
          <Pagination/>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    schools: state.school.schools // Assuming 'schools' is the key where schools are stored in Redux state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSchool: (school) => dispatch(addSchool(school)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(School);
