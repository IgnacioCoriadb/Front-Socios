import { useDispatch, useSelector } from 'react-redux';
import { getAllPeople } from '../../redux/people/actions';
import React, { useEffect ,useState} from 'react';
import { format } from 'date-fns';
// import EditPeople from './EditPeople';


export default function People() {

const dispatch = useDispatch();
const people = useSelector(state => state.people.people);
const error = useSelector(state => state.people.error);
const loading = useSelector(state => state.people.loading);
//abrir  y cerar modal 
const [showModal, setShowModal] = useState(false);
const handleOpenModal = () => setShowModal(true);
const handleCloseModal = () => setShowModal(false);
const [idSelected, setIdSelected] =useState(null);

//enviar id a editar
const handlePerson=(id)=>{
  console.log(id);
  setIdSelected(id);
  setShowModal(true);
}

useEffect(() => {
    dispatch(getAllPeople());
}, [dispatch]);

  return (
    <div className='container'>
      <h1 className='m-5'>Lista de Personas</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Fecha de Nacimiento</th>
            <th scope="col">Dirección</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Dni</th>
            <th scope="col">Email</th>
            <th scope='col'>Acciones</th>
          </tr>
        </thead>
        <tbody>
            {
                people?.map((p,key)=>(
                    <tr key={key}>
                        <td >{p.name}</td>
                        <td >{p.lastName}</td>
                        <td >{format(p.dateOfBirth, 'dd/MM/yyyy')}</td>
                        <td >{p.address}</td>
                        <td >{p.phone}</td>
                        <td >{p.DNI}</td>
                        <td >{p.email}</td>
                        <td>
                            <div className="btn-group">
                                <button type="button" className="btn btn-success" onClick={()=>handlePerson(p.id)}>Editar</button>
                                <button type="button" className="btn btn-danger ms-2">Eliminar</button>
                            </div>
                        </td>
                    </tr>
                ))
            }
        </tbody>
      </table>  
      {/* <EditPeople  show={showModal} handleClose={handleCloseModal} idSelected={idSelected}></EditPeople> */}
    </div>
  )
}
