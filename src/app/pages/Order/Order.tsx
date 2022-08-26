import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './Order.module.scss';
import { Product } from '../../../interfaces/products';
import { FileUp } from '../../../helpers';
import { addFormikAsync } from '../../../redux/actions/actionProducts';

const SignupSchema = Yup.object().shape({
    nombre: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    categoria: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    codigo: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    precio: Yup.number()
});

export const Order = () => {
    const [fileImage, setFileImage] = useState('');

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleFileChange=( e: any )=>{
        const file = e.target.files[0]
        console.log(file)
        //el FileUp es la configuracion con cloudinary y le asigno la respuesta de cloudi a la foto
             FileUp(file)
             .then( ( resp: any )=>{
                 console.log(resp)
                 setFileImage(resp);
             })
             .catch( ( error: any ) =>{
                 console.warn(error)
             })
     }

    const handleSubmit = ( values: Product ) => {
        values.image__front = fileImage;
        console.log('VALUE FILE IMAGE ', values);
        dispatch<any>( addFormikAsync( values ));
        navigate('/products');
    }

return (
  <div className={styles.order}>
    <div className={styles.order__container}>
      <img
      className={styles.order__image}
      src='https://wallpaperbat.com/img/350363-travel-iphone-wallpaper-best-of-hd-travel-wallpaper.jpg'
      alt='Register Banner'
      />
    <Formik
      initialValues={{
        nombre: '',
        categoria: '',
        image__front: '',
        precio: 0,
        codigo: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
        handleSubmit(values)
      }}
    >
      {({ errors, touched, handleSubmit, handleChange, handleReset }) => (
        <Form className={styles.order__form}
        style={{
          
        }}
        >
                <h1>Registra tus productos</h1>
        <div className={styles.order__box}>
        <label>Nombre del producto</label>
          <Field placeholder="Nombre del Producto" name="nombre" />
          {errors.nombre && touched.nombre ? (
            <div>{errors.nombre}</div>
          ) : null}
        </div>

        <div className={styles.order__box}>
        <label>Categoria</label>
          <Field placeholder="Categoria" name="categoria" />
          {errors.categoria && touched.categoria ? (
            <div>{errors.categoria}</div>
          ) : null}
        </div>
        <div className={styles.order__box}>
        <label>Precio</label>
          <Field placeholder="Precio" name="precio" />
          {errors.precio && touched.precio ? (
            <div>{errors.precio}</div>
          ) : null}
        </div>
        <div className={styles.order__box}>
        <label>Código de identificación</label>
          <Field placeholder="Codigo" name="codigo" />
          {errors.codigo && touched.codigo ? (
            <div>{errors.codigo}</div>
          ) : null}
        </div>
          <Field onChange={handleFileChange} name="image__front" type="file" />
          {/* {errors.file && touched.file ? <div>{errors.file}</div> : null} */}
     

          <button 
          className='btnThird'
          type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
  </div>

)};

export default Order;