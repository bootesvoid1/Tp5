export class User {
  static nextId = 1;
  id!: number;
  fullname: string;
  email: string;
  message: string;

  constructor(name: string, email: string, message: string) {
   this.fullname = name;
   this.email = email;
   this.message = message;
  }

  static getNextId(): Promise<number> {
   return new Promise((resolve) => {
     // Simulate a delay
     setTimeout(() => {
       resolve(User.nextId++);
     }, 1000);
   });
  }
 }

 // Then, when creating a new User:

