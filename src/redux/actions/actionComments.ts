import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typesComments } from "../types/types";
 
//---------------listar----------------//
export const listCommentsAsync = () => {
    return async ( dispatch: any ) => {
        const collectionTraer = await getDocs(collection(db, "posts"));
        const comments: any[] = [];
        collectionTraer.forEach((doc) => {
            comments.push({
                ...doc.data()
            })
        })
        console.log(comments);
        dispatch(listCommentsSync(comments));
    }
}

export const listCommentsSync = ( comments: any ) => {
    return {
        type: typesComments.list,
        payload: comments
    }
}

//-------------agregar---------------//
export const addCommentAsync = ( comment: any ) => {
    console.log(comment);
    return ( dispatch:any ) => {
        addDoc(collection(db, "posts"), comment)
            .then(resp => {
                dispatch(addCommentSync(comment));
            })
            .catch(error => {
                console.warn(error);
            })

    }
}

export const addCommentSync = ( comment: any ) => {
    return {
        type: typesComments.add,
        payload: comment
    }
}