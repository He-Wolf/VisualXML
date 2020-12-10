import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import bsCustomFileInput from 'bs-custom-file-input';

@Component({
  selector: 'app-open-modal',
  templateUrl: './open-modal.component.html',
  styleUrls: ['./open-modal.component.css']
})
export class OpenModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    bsCustomFileInput.init()
  }

}
