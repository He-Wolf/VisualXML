import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewerComponent } from './viewer/viewer.component';
import { ErrorPageComponent } from "./error-page/error-page.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'viewer', component: ViewerComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
