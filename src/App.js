import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Records from './components/Records';
import Pagination from './components/Pagination';
import "./App.css";

function App() {

    // To hold the actual data
    const [data, setData] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);


    useEffect(() => {
        axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
            .then(res => {
                    setData(res.data);
                })
                .catch(() => {
                    alert('/failed to fetch data/i');
                })
    }, [])

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(data.length / recordsPerPage)

    return (
        <div className='container mt-5'>
            <h2> Employee Data Table </h2>
            <Records data={currentRecords}/>
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

export default App;