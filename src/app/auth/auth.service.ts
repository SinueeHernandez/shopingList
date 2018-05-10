import * as firebase from 'firebase';

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
}
