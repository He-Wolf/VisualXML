import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import bsCustomFileInput from 'bs-custom-file-input';
import { XmlProcessorService } from "../services/xml-processor.service";
import { FileStateService } from "../services/file-state.service";

@Component({
  selector: 'app-open-modal',
  templateUrl: './open-modal.component.html',
  styleUrls: ['./open-modal.component.css']
})
export class OpenModalComponent implements OnInit {

  fileToParse: File = null;

  constructor(
    public router: Router,
    public activeModal: NgbActiveModal,
    public xmlProcessor: XmlProcessorService,
    public fileStateService: FileStateService,
    ) { }

  ngOnInit(): void {
    bsCustomFileInput.init();
  }

  handleFileInput(files: FileList){
    this.fileToParse = files.item(0);
  }
  
  async parseXML(){
    this.xmlProcessor.xmlDom = await this.xmlProcessor.parseXML(this.fileToParse);
    this.xmlProcessor.xmlDom = this.xmlProcessor.nameConverter(this.xmlProcessor.xmlDom)
    // console.log(this.xmlProcessor.xmlDom);
    console.log(JSON.stringify(this.xmlProcessor.xmlDom, null, 4));
    this.fileStateService.isOpened = true;
    this.activeModal.close();
    this.router.navigate(['viewer']);
  }
}
