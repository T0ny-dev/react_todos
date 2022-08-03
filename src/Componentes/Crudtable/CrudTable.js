import React from 'react';
import CrudTableRow from '../CrudTableRow/CrudTableRow';
import './CrudTable.css'

const CrudTable = ({data, setDataToEdit, deleteData}) => {
  return(
    <div className='table'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
          <tr>
            <td colSpan="3">No date</td>
          </tr>
          ):(
            data.map((el) => <CrudTableRow 
            key ={el.id} 
            el={el}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}/>)
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CrudTable;