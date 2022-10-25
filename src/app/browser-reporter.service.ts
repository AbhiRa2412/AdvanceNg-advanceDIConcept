import { Injectable } from '@angular/core';
import { Reporter } from './reporter';

@Injectable({
  providedIn: 'root'
})
export class BrowserReporterService implements Reporter{

  constructor() { }

  report():void{
    console.log(`Browser :
    width : ${window.outerWidth},
    height : ${window.outerHeight}`)
  }
}
