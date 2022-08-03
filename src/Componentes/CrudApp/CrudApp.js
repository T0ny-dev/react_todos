import React,{useState} from 'react';
import CrudForm from '../CrudForm/CrudForm';
import CrudTable from '../Crudtable/CrudTable';
import image from './linetask.svg'
import Header from '../Header/Hader'
import SecondHeader from '../SecondHeader/SecondHeader'
import './CrudApp.css'

const dateDb = [
  {
    id:1,
    name: "Learn React",
    description: "in my day i'm study React"
  },
  {
    id:2,
    name: "Learn FrameWorks",
    description: "React Boostrap , Framewordk CSS & Material UI"
  },
  {
    id:3,
    name: "Take a breack",
    description: "view anime, sports & eat food"
  }
]


const CrudApp = () => {
  const [db, setDb]= useState(dateDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  }

  const updateData = (data) => {
    let newData = db.map((el)=> el.id === data.id ? data : el);
    setDb(newData)
  };
  const deleteData = (id) => {
    let isDelete = window.confirm(`¿Are you sure for delete this element ${id}?`)
    if(isDelete){
      let newData = db.filter(el => el.id!== id);
      setDb(newData)
    } else {
      return;
    }
  };

  return (
    <div className='container'>
      <div className='container__task'>
      <Header/>
      <h2>"Write your task easily"</h2>
      <img src={image} alt="magicball" width={160}></img>
      <CrudForm 
      createData={createData} 
      updateData={updateData}
      dataToEdit={dataToEdit}
      setDataToEdit={setDataToEdit}/>
      </div>
      <div className='container__table'>
        <SecondHeader/>
      <CrudTable 
      data={db}
      setDataToEdit={setDataToEdit}
      deleteData={deleteData}/>
      </div>
    </div>
  );
}

export default CrudApp;