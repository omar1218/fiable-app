import { Component, OnInit } from '@angular/core';
import { Promotion } from './promotion';

@Component({
  selector: 'app-fiable-promotion-eligibility',
  templateUrl: './fiable-promotion-eligibility.component.html',
  styleUrls: ['./fiable-promotion-eligibility.component.css']
})
export class FiablePromotionEligibilityComponent implements OnInit {

  promotion: Promotion[] = [
    new Promotion(1,"Omar Othman", 13000, "developer", 6),
    new Promotion(2,"Ezzat Elalaily", 7000, "Actor", 5),
    new Promotion(3,"Yehia Elfakharany", 6500, "Author", 4),
    new Promotion(4,"Okal Ellemby", 8500, "Freelancer", 4),
    new Promotion(5,"Nelly Kareem", 8900, "Actress", 2)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
