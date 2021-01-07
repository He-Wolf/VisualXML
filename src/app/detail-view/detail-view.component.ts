import { Component, OnInit } from '@angular/core';
import { XmlProcessorService } from "../services/xml-processor.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { XpathModalComponent } from "../xpath-modal/xpath-modal.component";

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

  constructor(public xmlProcessor: XmlProcessorService, public activeModal: NgbModal) { }

  ngOnInit(): void {
  }

  xpathModal() {
    this.activeModal.open(XpathModalComponent);
  }
}
