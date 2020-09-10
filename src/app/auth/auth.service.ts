import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  locald: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://www.googleapis.com/auth/identitytoolkit/v3/relingparty/signNewUser?key=AIzaSyC0Lj0OEQhxSWeoEbisGBtwMUQVeoLUVBs',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    );
  }
}
