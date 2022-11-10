import React, { createContext, useEffect, useState } from 'react';

import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth= getAuth(app);



const AuthProvider = ({children}) => {
    const [user, setUser] = useState([]);//null
    const [loading, setLoading] = useState(true);

    //google authetication

    const googleProviderLogin= (provider) =>{
        return signInWithPopup(auth,provider);
    }

    // email and pass authentication
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        
        return signOut(auth);
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            //console.log('receent user',currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () =>{
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        setUser, 
        loading,
        createUser, 
        login, 
        logOut,
        googleProviderLogin
        
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
            
        </AuthContext.Provider >
    );
};

export default AuthProvider;