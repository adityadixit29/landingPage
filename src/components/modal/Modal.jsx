import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addSchool } from "../../redux/actions/SchoolActions";
import "./Modal.css";
const Modal = ({ setOpenModal }) => {
  const [schoolName, setSchoolName] = useState('');
  const [branch, setBranch] = useState('');
  const [curriculum, setCurriculum] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const newSchool = {
      schoolName,
      branch,
      curriculum,
    };
    addSchool(newSchool);
    // Update localStorage
    const updatedSchools = JSON.parse(localStorage.getItem('schools')) || [];
    updatedSchools.push(newSchool);
    localStorage.setItem('schools', JSON.stringify(updatedSchools));

    // Clear form fields after submission
    setSchoolName('');
    setBranch('');
    setCurriculum('');
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
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
          <button type="submit">Submit</button>
          <div className="footer">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            {/* <button>Continue</button> */}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal