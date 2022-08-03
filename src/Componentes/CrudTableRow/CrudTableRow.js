import React from 'react';



const CrudTableRow = ({el, setDataToEdit, deleteData}) => {

  let {name, description, id} = el;

  return (
      <tr>
        <td>{name}</td>
        <td>{description}</td>
        <td  style={{
        textAlign: "center",
      }}>
          <button className='button__edit' onClick={()=> setDataToEdit(el)}>Edit</button>
          <button className='button__delete' onClick={()=> deleteData(id)}>Delete</button>
        </td>
      </tr>
  );
}


export default CrudTableRow;