import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root'
})  // for @self
// @Injectable() // for testing @Optional
export class LoggerService implements Logger{

  prefix = 'root';
  
  constructor() { }
  
  log(message:string){
    console.log(`${this.prefix} : ${message}`)
  }
  
}
