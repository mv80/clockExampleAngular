import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { timer, Subject,  } from 'rxjs';
import {takeUntil} from 'rxjs/operators';

 
const NumberOfSecondTOReport = 10; 
@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnDestroy {
  _reset : boolean;
  @Input('reset') set reset(value : boolean){
    this._reset = value;
    this.value=0;
  }
  @Output() hourPassed : EventEmitter<number> = new EventEmitter();
  value: number = 0;
  ngUnsubscribe = new Subject();
  
  constructor() { }

  ngOnInit() {
    const source = timer(1000, 1000);
    source
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(val => {
      this.value++;
      if(this.value > 0 && this.value % NumberOfSecondTOReport === 0 ) {
        this.hourPassed.emit(1);
      }
    });
  }
  ngOnDestroy(){
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
