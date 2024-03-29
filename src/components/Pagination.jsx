
import React from 'react';
import "./Pagination.css";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    const goToNextPage = () => {
            if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const goToPrevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        <nav>
            <button onClick = {goToPrevPage}>Previous</button>
            <button className="PageNumber">{currentPage}</button>
            <button onClick = {goToNextPage}>Next</button>
        </nav>
    )
}

export default Pagination
