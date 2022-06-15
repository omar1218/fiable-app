import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-str-int',
  templateUrl: './str-int.component.html',
  styleUrls: ['./str-int.component.css']
})
export class StrIntComponent implements OnInit {

    message = `We are the Techies from Fiable`;
    text='';
    mood='😶';

  constructor() { }

  ngOnInit(): void {
  }

  getMessage(){
    console.log('this is from function');
    return this.message;
  }

  onClick(){
    alert('you clicked the button');
  }



  onKeyUp(x:any){
    this.text = x.target.value;
    console.log(this.text);
  }
}
