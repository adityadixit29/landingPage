import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addSchool } from "../../redux/actions/SchoolActions";
import { IoArrowBackSharp } from "react-icons/io5";
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
          <div className='modal-top-heading'>
            <div className='modal-left'>
                <span>
                <IoArrowBackSharp/>
                </span>
                Add New Data
            </div>
            <div className='modal-right'>
            <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          
          <div className='modal'>
            <label className='modal-input'>School:</label> <input
              type="text"
              placeholder="School"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
            />
          </div>
          <div className='modal'>
            <label className='modal-input'>Branch:</label> <input
              type="text"
              placeholder="Branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            />
          </div>
          <div className='modal'>
            <label className='modal-input'>Curriculum:</label> <input
              type="text"
              placeholder="Curriculum"
              value={curriculum}
              onChange={(e) => setCurriculum(e.target.value)}
            />
          </div>
          <div className="footer-modal">
            <button type="submit">Submit</button>
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