import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPersonById ,updatePerson,getAllPeople} from '../../redux/people/actions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Modal, Button } from 'react-bootstrap';
import { format } from 'date-fns';

export default function FormPeople({showModal,handleClose,idSelected}) {
    const dispatch = useDispatch();
    const personById = useSelector(state => state.people.person);
    const messageModal = idSelected ? "Editar persona" : "Crear Persona";

    useEffect(()=>{
        if(idSelected){
            dispatch(getPersonById(idSelected));
        }
    },[idSelected])


    const initialValues = {
        name: personById?.name || '',
        lastName: personById?.lastName || '',
        dateOfBirth: personById?.dateOfBirth ? new Date(personById.dateOfBirth) : new Date(), // Use new Date() para establecer la fecha actual por defecto
        address: personById?.address || '',
        phone: personById?.phone || '',
        DNI: personById?.DNI || '',
        email: personById?.email || '',
    };


    const validationSchema = Yup.object().shape({
      name: Yup.string()
        .min(3, 'Nombre demasiado corto!')
        .max(50, 'Nombre demasiado largo!')
        .required('El nombre es obligatorio!'),
      lastName: Yup.string()
        .min(2, 'Apellido demasiado corto!')
        .max(50, 'Apellido demasiado largo!')
        .required('El apellido es obligatorio!'),
      dateOfBirth: Yup.date()
        .required('La fecha de nacimiento es obligatoria'),
      address: Yup.string()
        .required('La dirección es obligatoria'),
      phone: Yup.string()
        .matches(/^[0-9]+$/, 'El número de teléfono solo puede contener números')
        .min(7, 'El número de teléfono debe tener al menos 7 dígitos')
        .max(15, 'El número de teléfono es demasiado largo')
        .required('El número de teléfono es obligatorio'),
      DNI: Yup.string()
        .matches(/^[0-9]+$/, 'El DNI solo puede contener números')
        .min(7, 'El DNI debe tener al menos 7 dígitos')
        .max(15, 'El DNI es demasiado largo')
        .required('El DNI es obligatorio'),
      email: Yup.string()
        .email('Email inválido')
        .required('El email es obligatorio'),
    });
    

    const handleSubmit =async  (values) => {
        if(idSelected){
            const response =await dispatch(updatePerson({id:idSelected,values}));
            console.log(response)
            dispatch(getAllPeople());

        }
    }



return (
    <div>
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{messageModal}</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <Formik
                        enableReinitialize={true}
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            handleSubmit(values)
                        }}
                    >
                    {({ errors, touched ,values, handleChange}) => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <Field name="name" className={`form-control ${errors.name && touched.name ? 'is-invalid' : ''}`} />
                                <ErrorMessage name="name" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Apellido</label>
                                <Field name="lastName" className={`form-control ${errors.lastName && touched.lastName ? 'is-invalid' : ''}`} />
                                <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="dateOfBirth">Fecha de Nacimiento</label>
                                <Field name="dateOfBirth" type="date" className={`form-control ${errors.dateOfBirth && touched.dateOfBirth ? 'is-invalid' : ''}`} onChange={handleChange} value={format(new Date(values.dateOfBirth), 'yyyy-MM-dd')}/>
                                <ErrorMessage name="dateOfBirth" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Dirección</label>
                                <Field name="address" type="text" className={`form-control ${errors.address && touched.address ? 'is-invalid' : ''}`} />
                                <ErrorMessage name="address" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Teléfono</label>
                                <Field name="phone" type="text" className={`form-control ${errors.phone && touched.phone ? 'is-invalid' : ''}`} />
                                <ErrorMessage name="phone" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="DNI">DNI</label>
                                <Field name="DNI" type="text" className={`form-control ${errors.DNI && touched.DNI ? 'is-invalid' : ''}`} />
                                <ErrorMessage name="DNI" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Field name="email" type="text" className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`} />
                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                            </div>
                            <div className="d-flex justify-content-end">
                                <Button type="button" className="btn btn-danger mt-2 ms-2" onClick={handleClose}>Cancelar</Button>
                                <Button type="submit" className="btn btn-primary mt-2 ms-2">Guardar</Button>
                            </div>
                        </Form>
                    )}
                    </Formik>
                </Modal.Body>
        </Modal>    
    </div>
  )
}
