import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, Form } from '@angular/forms';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  userForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      website: new FormControl(''),
      phone: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        zipCode: new FormControl('')
      }),
      company: new FormGroup({
        cname: new FormControl(''),
        cwebsite: new FormControl(''),
        cphone: new FormControl('')
      })
    })
  }

  submit(){

  }


}
