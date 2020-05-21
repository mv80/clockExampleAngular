import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hour-reporter',
  templateUrl: './hour-reporter.component.html',
  styleUrls: ['./hour-reporter.component.scss']
})
export class HourReporterComponent implements OnInit {
  _reset : boolean;
  @Input('reset') set reset(value : boolean){
    this._reset = value;
    this._hourNumber=0;
  }
  _hourNumber : number = 0;
 @Input('hoursNumber') set hoursNumber( value : number){
   this._hourNumber = value;
 }
 get hoursNumber() : number {
   return this._hourNumber;
 }
 
  constructor() { }

  ngOnInit() {
  }

}
