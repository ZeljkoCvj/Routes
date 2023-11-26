import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SingupComponent } from "./singup/singup.component";
import { LoginComponent } from "./login/login.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { ContentComponent } from "./content/content.component";
import { CanActiveGuard } from "./guards/can-active.guard";
import { Resolvere } from "./guards/resolve.guard";
import { AddComponent } from "./content/add/add.component";
import { EditComponent } from "./content/edit/edit.component";
import { SearchComponent } from "./search/search.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "singup", component: SingupComponent },
  { path: "login", component: LoginComponent },
  {
    path: "content",
    component: ContentComponent,
    canActivate: [CanActiveGuard],
    resolve: { status: Resolvere },
  },
  { path: "adduser", component: AddComponent, canActivate: [CanActiveGuard] },
  { path: "edit/:id", component: EditComponent, canActivate: [CanActiveGuard] },
  { path: "search", component: SearchComponent, canActivate: [CanActiveGuard] },
  { path: "not-found", component: NotfoundComponent },
  { path: "**", redirectTo: "/not-found" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
