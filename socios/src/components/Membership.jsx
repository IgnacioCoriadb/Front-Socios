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
      <h1>Lista de socios</h1>
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
          </tr>
        </thead>
        <tbody>
        {membershipData?.map((u, key) => (
          <tr key={key}>
            <td >{u.Person.name}</td>
            <td >{u.Person.lastName}</td>
            <td >{format(u.Person.dateOfBirth, 'dd/MM/yyyy')}</td>
            <td >{u.Person.address}</td>
            <td >{u.Person.phone}</td>
            <td >{u.Person.DNI}</td>
            <td >{u.Person.email}</td>
          </tr>
          ))}
        
        
        </tbody>
      </table>
    
  
    </div>
  );
};

export default Membership;
