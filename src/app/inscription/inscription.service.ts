import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
 providedIn: 'root'
})
export class InscriptionService {
  public user: any ;
  public users: User[]=[];
   addUser(name: string, email: string, message: string) {
      User.getNextId().then((id) => {
        const user = new User(name, email, message);
        user.id = id;
        console.log(user);
        this.users.push(user as User);
      });
    }
 }


