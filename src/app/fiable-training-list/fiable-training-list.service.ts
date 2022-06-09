import { Trainee } from "./trainee";
export class TraineeService {
    getTrainees(){
        return([
            new Trainee("Omar", "Othman", 30, "angular"),
            new Trainee("Jennifer", "Aniston", 30, "angular"),
            new Trainee("Mark", "Hamill", 30, "angular"),
            new Trainee("Willson", "Cox", 3000, "angular")
          ]);
    }
}