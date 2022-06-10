import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@Angular/platform-browser';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
@Input() counter!:number;
@Output() counterChange = new EventEmitter<number>();

dec(){
  --this.counter;
  this.counterChange.emit(this.counter);
}
inc(){
  ++this.counter;
  this.counterChange.emit
}
  constructor() { }

  ngOnInit(): void {
  }

}
