import React, {useState, useEffect} from 'react';
import './CrudForm.css';



const initialForm = {
  name:"",
  description:"",
  id:null
};

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {

  const [form, setForm] = useState(initialForm);

  useEffect(()=>{
    if(dataToEdit){
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  },[dataToEdit])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value,
    }) 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!form.name || !form.description){
      alert("dates invalid");
      return;
    }

    if(form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleClean();

  }

  const handleClean = (e) => {
    setForm(initialForm)
    setDataToEdit(null);
  }

  return (
    <div className='container'>  
      <form onSubmit = {handleSubmit}>
      <h3>{dataToEdit ? "Edit Task":"Add Task"}</h3>
        <input 
        className='form__inputs'
        type ="text" 
        name="name" 
        placeholder='Name of you task'
        onChange={handleChange} 
        value={form.name}/>

        <input 
        className='form__inputs'
        type ="text" 
        name="description" 
        placeholder='Description of you task'
        onChange={handleChange} 
        value={form.description}/>

        <input className='form__send' type="submit" value="Send"/>
        <input className='form__clean' type="reset" value="Clean" onClick={handleClean}/>
      </form>
    </div>
  );
}

export default CrudForm;