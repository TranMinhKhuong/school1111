import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SchoolListComponent } from "./school-list/school-list.component";
import { SchoolEditComponent } from "./school-edit/school-edit.component";
import { SchoolAddComponent } from "./school-add/school-add.component";
import { SchoolDetailComponent } from "./school-detail/school-detail.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { SchoolManagerComponent } from "./school-manager/school-manager.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "school-list", component: SchoolListComponent },
  { path: "school-add", component: SchoolAddComponent },
  { path: "school/:schoolID", component: SchoolDetailComponent },
  { path: "school/edit/:schoolID", component: SchoolEditComponent },
  { path: "school-manager", component: SchoolManagerComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}