import React,{useEffect, useState} from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { getPersonById,updatePerson } from '../../redux/people/actions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Modal, Button } from 'react-bootstrap';

export default function FormPeople({showModal,handleClose}) {
    // const dispatch = useDispatch();
    // const personById = useSelector(state => state.people.person);
  return (
    <div>
  <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ejemplo de Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Este es un modal de ejemplo creado con Bootstrap y React.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>    </div>
  )
}
