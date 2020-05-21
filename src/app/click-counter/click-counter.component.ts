import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HostListener  } from "@angular/core";
import { timer,  Subscription,  } from 'rxjs';


@Component({
  selector: 'app-click-counter',
  templateUrl: './click-counter.component.html',
  styleUrls: ['./click-counter.component.scss']
})
export class ClickCounterComponent implements OnInit, OnDestroy {
  _reset : boolean;
  @Input('reset') set reset(value : boolean){
    this._reset = value;
    this.timesinceUserLastclicked=0;
  }
  timesinceUserLastclicked = 0; 
  subscription : Subscription;
  takeValues : boolean = false; 
  firstTime : boolean = false; 
  source ;
  @HostListener("document:click", ['$event'])
  clickEvent(event){
    console.log("User Click using Host Listener");
    this.timesinceUserLastclicked = 0;
    if(!this.firstTime) {
      this.firstTime = true;
      this.source
      .subscribe( val => this.timesinceUserLastclicked++);
    }
    
  }
  constructor() { this.source = timer(1000, 1000); }

  ngOnInit() {
 
  }
  ngOnDestroy( ){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
   
  }
  

}
