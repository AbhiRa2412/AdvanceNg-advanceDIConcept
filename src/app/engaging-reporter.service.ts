import { Injectable } from '@angular/core';
import { Reporter } from './reporter';

@Injectable({
  providedIn: 'root'
})
export class EngagingReporterService implements Reporter{

  constructor() { }

  report():void{
    console.log(`This is engaging service`)
  }
}
