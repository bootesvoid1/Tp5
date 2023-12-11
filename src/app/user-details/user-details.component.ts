import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from '../models/user.model'; // Adjust the path based on your project structure

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  user!: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data)

      this.user = data
    }
  }
