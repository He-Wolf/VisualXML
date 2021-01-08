import { Component, OnInit } from '@angular/core';
import { XmlProcessorService } from "../services/xml-processor.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { XpathModalComponent } from "../xpath-modal/xpath-modal.component";

@Component({
  selector: 'app-element-data',
  templateUrl: './element-data.component.html',
  styleUrls: ['./element-data.component.css']
})
export class ElementDataComponent implements OnInit {

  constructor(public xmlProcessor: XmlProcessorService, public activeModal: NgbModal) { }

  ngOnInit(): void {
  }

  xpathModal() {
    this.activeModal.open(XpathModalComponent);
  }
}
