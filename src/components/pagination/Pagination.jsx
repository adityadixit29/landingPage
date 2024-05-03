import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./pagination.css"
const Pagination = () => {
    return (
        <div className="pagination">
            <button
                className="pagination-arrow">
               <IoIosArrowBack/>
            </button>

            <button className='pagination-button active'>
                01
            </button>
            <button className='pagination-button'>
                02
            </button>
            <button className='pagination-button'>
                03
            </button>
            <button className='pagination-button'>
                ...
            </button>

            <button className='pagination-button'>
                105
            </button>

            <button
                className="pagination-arrow"
                
            >
                <IoIosArrowForward/>
            </button>
        </div>
    )
}

export default Pagination