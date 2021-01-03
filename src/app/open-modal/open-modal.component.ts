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
    // console.log(JSON.stringify(this.xmlProcessor.xmlDom.childNodes, this.getCircularReplacer(), 4));
    this.fileStateService.isOpened = true;
    this.activeModal.close();
    this.router.navigate(['viewer']);
  }

  getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };
}
