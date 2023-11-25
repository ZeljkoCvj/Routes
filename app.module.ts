import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { HomeComponent } from './home/home.component';
import { enviroment } from './enviroments/enviroment.prod';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { Resolvere } from './guards/resolve.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingupComponent,
    HomeComponent,
    HeaderComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(enviroment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [Resolvere],
  bootstrap: [AppComponent],
})
export class AppModule {}
