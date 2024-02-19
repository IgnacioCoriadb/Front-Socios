import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMembership } from '../redux/membershipActions/actions';

const Membership = () => {
  const dispatch = useDispatch();
  const membershipData = useSelector(state => state.membershipData);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(getAllMembership());
  }, [dispatch]);


  return (
    <div>
      <h1>Lista de socios</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {membershipData && (
        <div>
          {membershipData.map((u, key) => (
            <p key={key}>{u.Person.DNI}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Membership;
