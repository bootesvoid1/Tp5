import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InscriptionService } from './inscription.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
title='codesandbox';
user!:User;
constructor(private inscriptionService : InscriptionService){}
  onSubmit(form: NgForm) {
    if (form.valid){
      console.log(form.value)
      this.inscriptionService.user = form.value as User;
      this.user=this.inscriptionService.user;
      this.inscriptionService.addUser(this.user.fullname,this.user.email,this.user.message);
    }
  else {
  console.log('form invalid');
}}
  }


