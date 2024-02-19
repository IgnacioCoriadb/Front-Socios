import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMembership } from '../redux/membershipActions/actions';
import { format } from 'date-fns';

const Membership = () => {
  const dispatch = useDispatch();
  const membershipData = useSelector(state => state.membershipData);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(getAllMembership());
  }, [dispatch]);


  return (
    <div className='container'>
      <h1 className='m-5'>Lista de socios</h1>
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
            <th scope='col'>Estado de socio</th>
            <th scope='col'>Ultima cuota paga</th>
            <th scope='col'>Acciones</th>
          </tr>
        </thead>
        <tbody>
        {membershipData?.map((m, key) => (
          <tr key={key}>
            <td >{m.Person.name}</td>
            <td >{m.Person.lastName}</td>
            <td >{format(m.Person.dateOfBirth, 'dd/MM/yyyy')}</td>
            <td >{m.Person.address}</td>
            <td >{m.Person.phone}</td>
            <td >{m.Person.DNI}</td>
            <td >{m.Person.email}</td>
            <td className={`text-${m.status ? 'success' : 'danger'}`}>{m.status ? 'Activo' : 'Inactivo'}</td>
            <td >{format(m.lastPayment, 'dd/MM/yyyy')}</td>
            <td>
              <div className="btn-group">
                <button type="button" className="btn btn-primary">Editar</button>
                <button type="button" className="btn btn-primary ms-2">Eliminar</button>
              </div>
            </td>
          </tr>
          ))}
        
        
        </tbody>
      </table>
    
  
    </div>
  );
};

export default Membership;
