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

  handleFileInput(files: FileList) {
    this.fileToParse = files.item(0);
  }

  async parseXML() {
    this.xmlProcessor.xmlDom = await this.xmlProcessor.parseXML(this.fileToParse);
    this.xmlProcessor.changePropertyName(this.xmlProcessor.xmlDom, "#name", "name");
    // this.xmlProcessor.nameConverter();
    console.log(this.xmlProcessor.xmlDom);
    // console.log(JSON.stringify(Object.values(this.xmlProcessor.xmlDom)[0], null, 4));
    // console.log(JSON.stringify(removeKeys(this.xmlProcessor.xmlDom, ['name', 'children']), null, 4));
    this.fileStateService.isOpened = true;
    this.activeModal.close();
    this.router.navigate(['viewer']);
  }
}

const removeKeys = (obj, keys) => obj !== Object(obj)
  ? obj
  : Array.isArray(obj)
    ? obj.map((item) => removeKeys(item, keys))
    : Object.keys(obj)
      .filter((k) => !keys.includes(k))
      .reduce(
        (acc, x) => Object.assign(acc, { [x]: removeKeys(obj[x], keys) }),
        {}
      )