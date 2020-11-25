import {Injectable} from '@angular/core';

// @Injectable({providedIn: 'root'})
export class LoggingService {
  data: string;
  printLog(message){
    console.log(this.data);
    console.log(message);
    this.data = message;
  }
}
