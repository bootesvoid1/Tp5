import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { UserListeComponent } from './user-liste/user-liste.component';
const routes: Routes = [{ path: '', component: InscriptionComponent },
{ path: 'user-list', component: UserListeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
