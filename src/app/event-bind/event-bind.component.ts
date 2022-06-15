import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css']
})
export class EventBindComponent implements OnInit {

  mood = '😶';
  text = '';
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    alert('this is coming as you clicked the button...');
  }

  onKeyUp(x:any){
    this.text=x.target.value;
    console.log(this.text);
  }
  
}

