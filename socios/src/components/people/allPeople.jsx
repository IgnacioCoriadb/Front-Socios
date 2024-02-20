import { useDispatch, useSelector } from 'react-redux';
import { getAllPeople } from '../../redux/people/actions';
import React, { useEffect ,useState} from 'react';
import { format } from 'date-fns';
import FormPeople from './formPeople';
import { Modal, Button } from 'react-bootstrap';


export default function People() {

const dispatch = useDispatch();
const people = useSelector(state => state.people.people);
const error = useSelector(state => state.people.error);
const loading = useSelector(state => state.people.loading);
const [idSelected, setIdSelected] =useState(null);

const [showModal, setShowModal] = useState(false);

const handleClose = () => setShowModal(false);
const handleShow = () => setShowModal(true);



//enviar id a editar
const handlePerson=(id)=>{
  console.log(id);
  handleShow();
  setIdSelected(id);
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
      <div>
        <FormPeople showModal={showModal} handleClose={handleClose}></FormPeople>
      </div>
    </div>
  )
}
