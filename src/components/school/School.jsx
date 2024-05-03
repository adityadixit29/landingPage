import Navbar from "../navbar/Navbar";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { MdArrowBack } from "react-icons/md";
import { FaRegPlayCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import Request from "../request/Request"
import Curriculum from "../curriculum/Curriculum";
import Modal from "../modal/Modal"
import { connect } from 'react-redux';
import { addSchool } from "../../redux/actions/SchoolActions";
import "./school.css";

const School = ({ schools, addSchool }) => {
  const [request, setRequest] = useState(true);
  const [curriculumtab, setCurriculumtab] = useState(false);
  // const [schoolName, setSchoolName] = useState('');
  // const [branch, setBranch] = useState('');
  // const [curriculum, setCurriculum] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    const storedSchools = JSON.parse(localStorage.getItem('schools'));
    if (storedSchools) {
      // If there are schools in local storage, dispatch an action to add them to Redux state
      storedSchools.forEach(school => addSchool(school));
    }
  }, [addSchool]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newSchool = {
  //     schoolName,
  //     branch,
  //     curriculum,
  //   };
  //   addSchool(newSchool);
  //   // Update localStorage
  //   const updatedSchools = JSON.parse(localStorage.getItem('schools')) || [];
  //   updatedSchools.push(newSchool);
  //   localStorage.setItem('schools', JSON.stringify(updatedSchools));

  //   // Clear form fields after submission
  //   setSchoolName('');
  //   setBranch('');
  //   setCurriculum('');
  // };

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
            {/* <button type="button" className="" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Add new
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Save Info</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                      <div>
                        School: <input
                          type="text"
                          placeholder="School"
                          value={schoolName}
                          onChange={(e) => setSchoolName(e.target.value)}
                        />
                      </div>
                      <div>
                        Branch: <input
                          type="text"
                          placeholder="Branch"
                          value={branch}
                          onChange={(e) => setBranch(e.target.value)}
                        />
                      </div>
                      <div>
                        Curriculum: <input
                          type="text"
                          placeholder="Curriculum"
                          value={curriculum}
                          onChange={(e) => setCurriculum(e.target.value)}
                        />
                      </div>
                      <div className="modal-footer" style={{marginTop:"10px"}}>
                        <a type="button" className="btn btn-secondary" data-bs-dismiss="modal" href="/" style={{backgroundColor:"#4D8EFF", textDecoration:"none", color:"white", padding:"5px 10px", marginRight:"5px", borderRadius:"6px"}}>Close</a>
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div> */}
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
