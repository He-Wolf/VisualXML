import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { XmlProcessorService } from "../services/xml-processor.service";

@Component({
  selector: 'app-saveas-modal',
  templateUrl: './saveas-modal.component.html',
  styleUrls: ['./saveas-modal.component.css']
})
export class SaveasModalComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal,
    public xmlProcessor: XmlProcessorService,
    ) { }

  ngOnInit(): void {
  }

  saveasXML(){
    this.xmlProcessor.saveasXML();
    this.activeModal.close();
  }

}
