import React, { useEffect, useState } from 'react'
import { TfiMenuAlt } from "react-icons/tfi";
import { CiSliderHorizontal } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
const data = [
  { school: 'Maplewood Academy', branch: 'Bangalore Campus', curriculum: 'Digital Innovation', status: 'Active' },
  { school: 'Crestview High School', branch: 'Kolkata Branch', curriculum: 'Cultural Diversity', status: 'Active' },
  { school: 'Harmony Elementary', branch: 'Chennai Division', curriculum: 'Environmental', status: 'Inactive' },
  { school: 'Summit Ridge Middle School', branch: 'Hyderabad Wing', curriculum: 'Creative Arts', status: 'Inactive' },
  { school: 'Evergreen Preparatory School', branch: 'Pune Annex', curriculum: 'Future Entrepreneurs', status: 'Inactive' },

];    
const Requset = () => {
  // const [selectedRows, setSelectedRows] = useState([]);
  const [schoolData, setSchoolData] = useState([]);

  useEffect(() => {
    // Retrieve data from local storage when component mounts
    const storedSchools = JSON.parse(localStorage.getItem('schools'));
    if (storedSchools) {
      setSchoolData(storedSchools);
    }
  }, []);
  // const handleCheckboxChange = (index) => {
  //   if (selectedRows.includes(index)) {
  //     setSelectedRows(selectedRows.filter((i) => i !== index));
  //   } else {
  //     setSelectedRows([...selectedRows, index]);
  //   }
  // };    

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  return (
    <div className='table-container'>
      <div className="table-topbar">
        <div className='table-topbar-left'>
          <select name="" id="">
            <option value="">10</option>
            <option value="">5</option>
            <option value="">20</option>
          </select>
        </div>
        <div className='table-topbar-right'>
          <li className='filter'>
           <div className='filter-icon'><CiSliderHorizontal /></div> 
            Filter</li>
          <li className='clear'>
            <div className='clear-icon'><RiDeleteBinLine /></div>
            Clear</li>
          <TfiMenuAlt style={{fontSize:"larger"}} />
        </div>
      </div>
      <div className="table-main">
      <table>
      <thead>
        <tr>
          <th><input type="checkbox" name="" id="" /></th>
          <th>School</th>
          <th>Branch</th>
          <th>Curriculum</th>
          <th>Date</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
      {schoolData.map((item, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    //checked={selectedRows.includes(index)}
                    //onChange={() => handleCheckboxChange(index)}
                  />
                </td>
                <td>{item.schoolName}</td>
                <td>{item.branch}</td>
                <td>{item.curriculum}</td>
                <td>{getCurrentDate()}</td>
                <td>...</td>
              </tr>
        ))}
      </tbody>
    </table>
      </div>
    </div>
  )
}

export default Requset