import { auth } from './firebase';

userSignup = async (email, password) => {

    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log('User registered successfully:', response.user.uid);
        // You can navigate to another screen or perform other actions upon successful registration

        return response;
    } catch (error) {

        if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
        }

        console.error(error);
    }
};