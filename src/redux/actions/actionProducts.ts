import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typesProductos } from "../types/types";
 
export const editAsync = ( nombre: string, producto: any ) => {
    console.log(nombre, producto);
    return async ( dispatch:any ) => {
        const collectionTraer = collection(db, "productosDB");
        const q = query(collectionTraer, where("nombre","==", nombre ));
        const traerDatosQ = await getDocs(q);
        console.log(q, traerDatosQ);
        let id: string;
        traerDatosQ.forEach( async (docu) => {
            // console.log('DOCU', docu.id);
            id = docu.id;
        })
        // console.log(id);
        const documRef = doc(db, "productosDB", id! );
        
        await updateDoc(documRef, producto)
            .then(resp => {
                dispatch(listAsync());
                console.log(resp);
            })
            .catch((err) => console.log(err));
            dispatch(editSync(producto));
    }
} 

export const editSync = ( producto:any ) => {
    return {
        type: typesProductos.edit,
        payload: producto
    }
}

//-------------------delete--------------------//
export const deleteAsync = ( nombre:string ) => {
    return async ( dispatch:any ) => {
        const collectionTraer = collection(db, "productosDB");
        const q = query(collectionTraer, where("nombre", "==", nombre));
        const traerDatosQ = await getDocs(q);
        traerDatosQ.forEach((docum => {
            deleteDoc(doc(db, "productosDB", docum.id))
        }))
        dispatch(deleteSync(nombre));
        dispatch(listAsync());
    }
}

export const deleteSync = ( producto:any ) => {
    return {
        type: typesProductos.delete,
        payload: producto
    }
}

//---------------listar----------------//
export const listAsync = () => {
    return async ( dispatch:any ) => {
        const collectionTraer = await getDocs(collection(db, "productosDB"));
        const productos:any[] = [];
        collectionTraer.forEach((doc) => {
            productos.push({
                ...doc.data()
            })
        })
        dispatch(listSync( productos ));
    }
}

export const listSync = ( productos:any ) => {
    return {
        type: typesProductos.list,
        payload: productos
    }
}

//-------------agregar---------------//
export const addAsync = ( producto:any ) => {
    return ( dispatch:any ) => {
        addDoc(collection(db, "productosDB"), producto)
            .then(resp => {
                dispatch(addSync(producto));
                // dispatch(listAsync())
            })
            .catch(error => {
                console.warn(error);
            })
    }
}

export const addSync = ( producto:any ) => {
    return {
        type: typesProductos.add,
        payload: producto
    }
}

// ------- Agregar desde formik ------- //
export const addFormikAsync = ( product:any ) => {
    console.log('Action addFormik ',product);
    return ( dispatch:any ) => {
        addDoc(collection(db, 'productosDB'), product)
            .then(resp => {
                console.log(resp);
                dispatch(addFormikSync(product))
            })
            .catch(error => {
                console.warn(error);
            })
    }
}

export const addFormikSync = ( product:any ) => {
    return {
        type: typesProductos.addFormik,
        payload: product
    }
}