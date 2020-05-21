import { Component } from '@angular/core';
import { RouteConfigLoadStart } from '@angular/router';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent  {
  resetAllCountrs: boolean = false; 
  hoursNumber : number = 0;
  constructor() { }

 
  resetAll(){
    this.resetAllCountrs = !this.resetAllCountrs; 
    console.log('reset All');
    if(!this.resetAllCountrs){
      this.hoursNumber = 0;
    }
    console.log("reset all counters");
  }
  reportHourPassed($event){
     this.hoursNumber = this.hoursNumber + 1 ;
  }

}
