export class User {
  deserialize(user: User): any {
    throw new Error("Method not implemented.");
  }
    email:string;
    constructor(email:string){

        this.email = email;
    }
    

}
