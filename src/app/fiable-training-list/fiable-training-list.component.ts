import { Component, OnInit } from '@angular/core';
import { Trainee } from './trainee';

@Component({
  selector: 'app-fiable-training-list',
  templateUrl: './fiable-training-list.component.html',
  styleUrls: ['./fiable-training-list.component.css']
})
export class FiableTrainingListComponent implements OnInit {

    traineeList: Trainee[] = [
      new Trainee("Omar", "Othman", 30, "angular"),
      new Trainee("Omar", "Othman", 30, "angular"),
      new Trainee("Omar", "Othman", 30, "angular"),
      new Trainee("Omar", "Othman", 3000, "angular")
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
