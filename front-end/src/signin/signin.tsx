import './signin.css'
import {auth} from '../firebase.ts';
import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

export function SignIn() {

    function handleSignIn(){
       signInWithPopup(auth, new GoogleAuthProvider());
    }

    return (
        <>
            <div className="d-flex vh-100 flex-column gap-2 align-items-center justify-content-center">
                <h1 className="text-center text-success p-1">Welcome to TO-Do-App</h1>
                <button onClick={handleSignIn} className="btn btn-primary">
                    Sign in With Google
                </button>
            </div>
        </>
    );
}