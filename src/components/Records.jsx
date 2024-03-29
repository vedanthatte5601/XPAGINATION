import React from 'react';
import "./Records.css";
const Records = ({data}) => {
    
  return (  
    <table className="table">
        <thead>
            <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Role</th>

            </tr>
        </thead>
        <tbody>
            {data.map(item => (
                <tr>
                    <td>{item.id} </td>
                    <td>{item.name} </td>
                    <td>{item.email} </td>
                    <td>{item.role} </td>
                </tr>
            ))}
        </tbody>
    </table>
  ) 
}

export default Records  