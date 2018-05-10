import firebase from 'firebase/app';
import 'firebase/auth';

export class AuthService {
    onUserSignUp(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(
            (value: any) => {
                console.log(value);
            }
        )
        .catch(
            error => console.log(error)
        );
    }

    signInUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            (response: Response) => console.log(response)
        )
        .catch(
            error => console.log(error)
        );
    }
}
