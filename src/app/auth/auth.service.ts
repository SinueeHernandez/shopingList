import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthService {
    token: string = null;

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {}

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
                (response: Response) => {
                    this.router.navigate(['/']);
                    firebase.auth().currentUser.getIdToken(true)
                        .then(
                            (token: string) => {
                                this.token = token;
                            }
                        );
                }
            )
            .catch(
                error => console.log(error)
            );
    }

    getToken() {
        firebase.auth().currentUser.getIdToken(true)
            .then(
                (token: string) => this.token = token
            );
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }

    logout() {
        firebase.auth().signOut()
            .then(
                response => {
                    this.token = null;
                    this.router.navigate(['/recipes']);
                }
            );
    }
}
