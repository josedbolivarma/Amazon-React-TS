import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { facebook, google } from "../../firebase/firebaseConfig"

import { typesLogin } from "../types/types";

//--------------------Logout----------------------//

export const logoutAsync = () => {
    return ( dispatch: any ) => {
        const auth = getAuth();
            signOut((auth))
                .then(({ user }: any ) => {
                    dispatch(logoutSync())
                    console.log('Adios', user)
                })
                .catch(error => {
                    console.warn(error);
                })
                
    }
}

export const logoutSync = () => {
    return {
        type: typesLogin.logout
    }
}

//--------------------Login Google--------------------//
export const loginGoogle = () => {
    return ( dispatch: any ) => {
        const auth = getAuth();
        signInWithPopup(auth, google)
            .then(( { user }:any ) => {
        dispatch(loginSincronico(user.email, user.password))
          console.log(user, 'Usuario autorizado');
        })
        .catch(error => {
            console.warn(error, 'No autorizado');
        })
    }
}
//--------------------Login Facebook--------------------//
export const loginFacebook = () => {
    return ( dispatch: any ) => {
        const auth = getAuth();
        signInWithPopup(auth, facebook)
            .then(( { user }:any ) => {
        dispatch(loginSincronico(user.email, user.password))
          console.log(user, 'Usuario autorizado');
        })
        .catch(error => {
            console.warn(error, 'No autorizado');
        })
    }
}

//--------------------Validar usuario y contraseña--------------------//
export const loginWithEmailPassAsync = ( email: string, password: string ) => {

    return ( dispatch:any ) => {
        const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password )
                .then(({user}: any ) => {
                    dispatch(loginSincronico( user.email, user.password ))
                    console.log('Usuario autorizado');
                }) 
                .catch(error => {
                    console.warn(error, 'No autorizado');
                })
    }
}


export const loginSincronico = ( email:string, password:any ) => {
    return {
        type: typesLogin.login,
        payload: {
            email,
            password
        }
    }
}