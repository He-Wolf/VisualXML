import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import bsCustomFileInput from 'bs-custom-file-input';
import { XmlProcessorService } from "../services/xml-processor.service";

@Component({
  selector: 'app-open-modal',
  templateUrl: './open-modal.component.html',
  styleUrls: ['./open-modal.component.css']
})
export class OpenModalComponent implements OnInit {

  fileToParse: File = null;

  constructor(
    public activeModal: NgbActiveModal,
    public xmlProcessor: XmlProcessorService,
    ) { }

  ngOnInit(): void {
    bsCustomFileInput.init()
  }

  handleFileInput(files: FileList){
    this.fileToParse = files.item(0);
  }
  
  parseXML(){
    this.xmlProcessor.parseXML(this.fileToParse);
    this.activeModal.close();
  }
}
