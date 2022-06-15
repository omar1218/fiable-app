import { Tranee } from "./tranee";

export class TraineeService{
    getTrainees(){
        return(
            [
                new Tranee("Amar","Reddy",33,"Angular"),
                new Tranee("jennifer","Johnson",23,"Angular"),
                new Tranee("Johnson","leo",36,"Angular"),
                new Tranee("David","robeert",43,"Angular"),
                new Tranee("Sunny","luis",32,"Angular"),
              ]
        );
    }
}