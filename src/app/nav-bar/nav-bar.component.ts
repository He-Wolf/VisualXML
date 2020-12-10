import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { OpenModalComponent } from "../open-modal/open-modal.component";
import { CloseModalComponent } from "../close-modal/close-modal.component";
import { SaveasModalComponent } from "../saveas-modal/saveas-modal.component";

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
    this.activeModal.open(OpenModalComponent);
  }

  saveasModal() {
    this.activeModal.open(SaveasModalComponent);
  }

  closeModal() {
    this.activeModal.open(CloseModalComponent);
  }
}
