import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { OpenModalComponent } from "../open-modal/open-modal.component";
import { FileStateService } from "../services/file-state.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {'class': 'h-100 d-flex'}
})
export class HomeComponent implements OnInit {

  constructor(
    public activeModal: NgbModal,
    public fileStateService: FileStateService,
    ) { }

  ngOnInit(): void {
  }
  
  openModal() {
    this.activeModal.open(OpenModalComponent);
  }

}
