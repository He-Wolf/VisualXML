import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { OpenModalComponent } from "../open-modal/open-modal.component";
import { CloseModalComponent } from "../close-modal/close-modal.component";
import { SaveasModalComponent } from "../saveas-modal/saveas-modal.component";
import { AboutModalComponent } from "../about-modal/about-modal.component";
import { FileStateService } from "../services/file-state.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public isMenuCollapsed = true;

  constructor(
    public activeModal: NgbModal,
    public fileStateService: FileStateService,
    ) { }

  ngOnInit(): void {
  }

  openModal() {
    this.activeModal.open(OpenModalComponent);
    this.isMenuCollapsed = true;
  }

  saveasModal() {
    this.activeModal.open(SaveasModalComponent);
    this.isMenuCollapsed = true;
  }

  closeModal() {
    this.activeModal.open(CloseModalComponent);
    this.isMenuCollapsed = true;
  }

  aboutModal() {
    this.activeModal.open(AboutModalComponent);
    this.isMenuCollapsed = true;
  }
}
