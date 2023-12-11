import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { InscriptionService } from './inscription/inscription.service';
import { UserListeComponent } from './user-liste/user-liste.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    UserDetailsComponent,
    UserListeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule

  ],
  providers: [
    provideClientHydration(),
    InscriptionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
