import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { SingupComponent } from "./singup/singup.component";
import { HomeComponent } from "./home/home.component";
import { enviroment } from "./enviroments/enviroment.prod";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { HeaderComponent } from "./header/header.component";
import { ContentComponent } from "./content/content.component";
import { Resolvere } from "./guards/resolve.guard";
import { ReactiveFormsModule } from "@angular/forms";
import { EditComponent } from "./content/edit/edit.component";
import { AddComponent } from "./content/add/add.component";
import { StartComponent } from "./content/closedialog/start.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonModule } from "@angular/material/button";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatTooltipModule } from "@angular/material/tooltip";
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingupComponent,
    HomeComponent,
    HeaderComponent,
    ContentComponent,

    EditComponent,
    AddComponent,
    StartComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    MatSnackBarModule,
    FormsModule,
    AngularFireModule.initializeApp(enviroment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
  ],
  providers: [Resolvere],
  bootstrap: [AppComponent],
})
export class AppModule {}
