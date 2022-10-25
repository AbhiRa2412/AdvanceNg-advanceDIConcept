import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Logger } from './logger';
import { Reporter } from './reporter';
import { REPORTERS } from './reporter.token';

@Injectable({
  providedIn: 'root'
})
export class ExperimentalLoggerService implements Logger{

  prefix = 'root';
  
  // constructor(private http:HttpClient) { }
  constructor(@Inject(REPORTERS) private reporters:ReadonlyArray<Reporter>) { }
  
  log(message:string){
    this.reporters.forEach((r) => r.report()); 
    console.log(`${this.prefix} (experimental):  ${message}`)
  }

}
