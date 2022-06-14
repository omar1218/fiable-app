import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterComponent implements OnInit {
  @Input() counter!: number;
  @Output() counterChange = new EventEmitter<number>();

  dec(){
    --this.counter;
    this.counterChange.emit(this.counter);
  }

  inc(){
    ++this.counter;
    this.counterChange.emit(this.counter);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
