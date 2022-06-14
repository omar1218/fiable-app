import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propety-bind',
  templateUrl: './propety-bind.component.html',
  styleUrls: ['./propety-bind.component.css']
})
export class PropetyBindComponent implements OnInit {

  constructor() { }

  message = 'this is from property binding component';

  ngOnInit(): void {
  }

}
