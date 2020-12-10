import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { OpenModalComponent } from "../open-modal/open-modal.component";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public isMenuCollapsed = true;

  constructor(public activeModal: NgbModal) { }

  ngOnInit(): void {
  }

  openModal() {
    //Here you define the name of your component
    this.activeModal.open(OpenModalComponent);
    //This section is if you want to have any variable to initialize
    //compConst.componentInstance.weight = undefined;
}
}
