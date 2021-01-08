import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AngularSplitModule } from 'angular-split';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OpenModalComponent } from './open-modal/open-modal.component';
import { SaveasModalComponent } from './saveas-modal/saveas-modal.component';
import { CloseModalComponent } from './close-modal/close-modal.component';
import { HomeComponent } from './home/home.component';
import { ViewerComponent } from './viewer/viewer.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { MainViewComponent } from './main-view/main-view.component';
import { ElementViewComponent } from './element-view/element-view.component';
import { DocumentViewComponent } from './document-view/document-view.component';
import { ChildElementsComponent } from './child-elements/child-elements.component';
import { ElementDataComponent } from './element-data/element-data.component';
import { DocumentDataComponent } from './document-data/document-data.component';
import { AncestorsComponent } from './ancestors/ancestors.component';
import { XpathModalComponent } from './xpath-modal/xpath-modal.component';
import { ErrorPageComponent } from './error-page/error-page.component';

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
    MainViewComponent,
    ElementViewComponent,
    DocumentViewComponent,
    ChildElementsComponent,
    ElementDataComponent,
    DocumentDataComponent,
    AncestorsComponent,
    XpathModalComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    AngularSplitModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    OpenModalComponent,
    CloseModalComponent,
    SaveasModalComponent,
],
})
export class AppModule { }
