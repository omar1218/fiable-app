import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  id: number = 0;
  genders: string[] | undefined;
  cModes: string[] | undefined;

  submit(userForm: any){
    console.log("we are testing the submit method", userForm);
  }

  constructor() { }

  ngOnInit(): void {
    this.genders = ['male', 'female', 'undefined/other'];
    this.cModes = ['phone', 'email'];
  }

}
