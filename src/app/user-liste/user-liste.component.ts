import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; // Import MatDialog modules
import { InscriptionService } from '../inscription/inscription.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-user-liste',
  templateUrl: './user-liste.component.html',
  styleUrls: ['./user-liste.component.css'] // Correct property name to 'styleUrls'
})
export class UserListeComponent implements OnInit {
  users: User[] = [];
  user!: User;
  userDetails!: User;
  constructor(
    private inscriptionService: InscriptionService,
    private router: Router,
    private dialog: MatDialog
  ) {}
  ngOnInit() {
    this.users = this.inscriptionService.users;
    this.user = this.inscriptionService.user;
  }
  openDetails() :void {
    console.log(this.userDetails)

    const dialogRef= this.dialog.open(UserDetailsComponent, {
      height: '200px',
      width: '450px',
      data:this.inscriptionService.user ,

    });
  }
  deleteUser(id:number) {
    this.users = this.users.filter(user => user.id !== id);
       this.router.navigate(['/user-list']);

  }
}
