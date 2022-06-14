import { Component, OnInit } from '@angular/core';
import { TraineeService } from './fiable-trainee-list.service';
import { Tranee } from './tranee';

@Component({
  selector: 'app-fiable-trainee-list',
  templateUrl: './fiable-trainee-list.component.html',
  styleUrls: ['./fiable-trainee-list.component.css']
})
export class FiableTraineeListComponent implements OnInit {

  traineeList;
  isActive = true;
  message='this message is for you';

  onSave(event:any){
    console.log("from Fiable...!!");
  }

  onKeyUp(tid:any){
    console.log(tid);
  }
  constructor() {
    let service = new TraineeService;
    this.traineeList = service.getTrainees();
   }

   getMessage(){
    console.log('this is from function');
    }
  ngOnInit(): void {
  }

}
