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
    this.xmlProcessor.xmlDom = null;
    this.xmlProcessor.xmlDom = await this.xmlProcessor.parseXML(this.fileToParse);
    console.log(this.xmlProcessor.xmlDom);
    this.xmlProcessor.addUUID();
    this.activeModal.close();

    if(this.hasParsererror()){
      this.fileStateService.ifError = true;
      this.fileStateService.isOpened = false;
      this.router.navigate(['error']);
    }
    else {
      this.fileStateService.isOpened = true;
      this.fileStateService.ifError = false;
      this.router.navigate(['viewer']);
    }
  }

  hasParsererror(): boolean {
    const parseErrors = this.xmlProcessor.xmlDom.getElementsByTagName("parsererror");
    if (parseErrors.length != 0) {
      return true;
    }
    return false;
  } 
}
