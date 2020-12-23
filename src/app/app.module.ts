import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CdkTreeModule } from '@angular/cdk/tree';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OpenModalComponent } from './open-modal/open-modal.component';
import { SaveasModalComponent } from './saveas-modal/saveas-modal.component';
import { CloseModalComponent } from './close-modal/close-modal.component';
import { HomeComponent } from './home/home.component';
import { ViewerComponent } from './viewer/viewer.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExampleTreeComponent } from './example-tree/example-tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    OpenModalComponent,
    SaveasModalComponent,
    CloseModalComponent,
    HomeComponent,
    ViewerComponent,
    TreeViewComponent,
    ExampleTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CdkTreeModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    OpenModalComponent,
    CloseModalComponent,
    SaveasModalComponent,
],
})
export class AppModule { }
