import { Component, OnInit } from '@angular/core';
import { TraineeService } from './fiable-training-list.service';
import { Trainee } from './trainee';

@Component({
  selector: 'app-fiable-training-list',
  templateUrl: './fiable-training-list.component.html',
  styleUrls: ['./fiable-training-list.component.css']
})
export class FiableTrainingListComponent implements OnInit {

    traineeList;

  constructor() { 
    let service = new TraineeService
    this.traineeList = service.getTrainees();
  }

  ngOnInit(): void {
  }

}
