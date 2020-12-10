import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-saveas-modal',
  templateUrl: './saveas-modal.component.html',
  styleUrls: ['./saveas-modal.component.css']
})
export class SaveasModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
