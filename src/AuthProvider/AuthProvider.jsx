import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../firebase/firebaseConfig";
import axios from "axios";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    console.log(currentUser)


    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .catch(error => {
                setError(error.message);
                setLoading(false);
                throw error;
            });
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .catch(error => {
                setError(error.message);
                setLoading(false);
                throw error;
            });
    };

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .catch(error => {
                setError(error.message);
                setLoading(false);
                throw error;
            });
    };

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
            .catch(error => {
                setError(error.message);
                throw error;
            });
    };

    const logOut = () => {
        setLoading(true);
        setCurrentUser(null);
        return signOut(auth)
            .catch(error => {
                setError(error.message);
                setLoading(false);
                throw error;
            });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
           

            if (user) {
            const loggedUser = { email: user.email };

                console.log(loggedUser)
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token respons ', res.data)

                        setCurrentUser(user);
                        console.log(currentUser)
                        setLoading(false);
                    })
            }
            else {


                setCurrentUser(user);
                console.log(currentUser)
                setLoading(false);
                axios.post(`${import.meta.env.VITE_API_URL}/logout`,{}, { withCredentials: true })
                    .then(res => {
                        console.log('logout', res.data)

                       
                    })

            }




        });

        return () => unsubscribe();
    }, [currentUser]);


    // verify userr token
    // useEffect(()=>{
    //     if (currentUser) {
    //         const loggedUser = { email: currentUser.email };
    //         console.log(loggedUser)
    //         axios.post('http://localhost:7000/jwt', loggedUser,{withCredentials:true} )
    //             .then(res => {
    //                 console.log('token ', res.data)
    //             })
    //     }
    // },[currentUser])

    const allValue = {
        currentUser,
        createUser,
        setCurrentUser,
        signInUser,
        googleLogin,
        updateUserProfile,
        logOut,
        loading,
        error
    };

    return (
        <AuthContext.Provider value={allValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
