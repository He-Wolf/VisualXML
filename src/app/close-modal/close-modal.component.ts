import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { XmlProcessorService } from "../services/xml-processor.service";
import { FileStateService } from "../services/file-state.service";

@Component({
  selector: 'app-close-modal',
  templateUrl: './close-modal.component.html',
  styleUrls: ['./close-modal.component.css']
})
export class CloseModalComponent implements OnInit {

  constructor(
    public router: Router,
    public activeModal: NgbActiveModal,
    public xmlProcessor: XmlProcessorService,
    public fileStateService: FileStateService,
    ) { }

  ngOnInit(): void {
  }

  fileClose() {
    this.xmlProcessor.xmlDom = null;
    this.fileStateService.isOpened = false;
    this.activeModal.close();
    this.router.navigate(['home']);
  }
}
