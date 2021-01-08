import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewerComponent } from './viewer/viewer.component';
import { ErrorComponent } from "./error/error.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'viewer', component: ViewerComponent },
  { path: 'error', component: ErrorComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
