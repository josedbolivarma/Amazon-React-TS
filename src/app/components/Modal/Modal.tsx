import { useState } from 'react'
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Product } from '../../../interfaces/products';
import * as Yup from 'yup';

import { ImCancelCircle } from 'react-icons/im';

import styles from './Modal.module.scss';
import { editAsync } from '../../../redux/actions/actionProducts';

const SignupSchema = Yup.object().shape({
    nombre: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    categoria: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    codigo: Yup.string(),
    precio: Yup.number()
});

export const Modal = ({ modalSidebar }: any ) => {

  const dispatch = useDispatch();

  const [clicked, setClicked] = useState( true );

  const handleClicked = () => {
      setClicked( false );
  }

  const handleSubmit = ( values: Product ) => {
    // e.preventDefault()
  //  console.log(values)
  const nombre = modalSidebar.nombre; 
  console.log('SIDEBAR FORM', values);
  console.log('SIDEBAR FORM NOMBRE', nombre)

   dispatch<any>( editAsync(nombre, values))
   setClicked(false);

}

  return (
    <div className={clicked? styles.sidebar : styles.none }>
        <div className={styles.sidebar__container}>
            <div className={styles.sidebar__modal}>
            <span onClick={handleClicked}>
                <ImCancelCircle className={styles.sidebar__close}/>
            </span>

            <h2>{modalSidebar.nombre}</h2>
            <img className={styles.sidebar__image} src={modalSidebar.image__front} alt='Modal Edit'/>
            <h2>{modalSidebar.categoria}</h2>
            <b>${modalSidebar.precio}</b>
            {/* <form onSubmit={handleSubmit} className={styles.sidebar__form}>
                <input className={styles.sidebar__input} type='text' placeholder='Nombre' value={modalSidebar.nombre}/>
                <input className={styles.sidebar__input} type='text' placeholder='Precio' value={modalSidebar.precio}/>
                <input className={styles.sidebar__input} type='text' placeholder='Categoria' value={modalSidebar.categoria}/>
            </form> */}

<Formik
      initialValues={{
        nombre: modalSidebar.nombre,
        categoria: modalSidebar.categoria,
        precio: modalSidebar.precio,
       
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        handleSubmit( values );
      }}
    >
      {({ errors, touched}) => (
        <Form className={styles.sidebar__form}
        style={{
          
        }}
        >
                <h1>Editar</h1>
          <Field className={styles.sidebar__input} placeholder="Nombre del Producto" name="nombre" />
          {errors.nombre && touched.nombre ? (
            <div>Error en el input</div>
          ) : null}

          <Field className={styles.sidebar__input} placeholder="Categoria" name="categoria" />
          {errors.categoria && touched.categoria ? (
            <div>Error en el input</div>
          ) : null}
          <Field className={styles.sidebar__input} placeholder="Precio" name="precio" />
          {errors.precio && touched.precio ? (
            <div>Error en el input</div>
          ) : null}
       
          <button 
          type="submit">
            Editar
          </button>
        </Form>
      )}
    </Formik>

        </div>
    </div>
       
    </div>
  )
}

export default Modal;