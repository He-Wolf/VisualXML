import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import bsCustomFileInput from 'bs-custom-file-input';
import * as xml2js from "xml2js";

@Component({
  selector: 'app-open-modal',
  templateUrl: './open-modal.component.html',
  styleUrls: ['./open-modal.component.css']
})
export class OpenModalComponent implements OnInit {

  fileToParse: File = null;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    bsCustomFileInput.init()
  }

  handleFileInput(files: FileList){
    this.fileToParse = files.item(0);
  }

  parseXML(){
    const reader = new FileReader();
    reader.onload = (evt) => {
        const xmlData: string = (evt as any).target.result;
        xml2js.parseString(xmlData, function (err, result) {
          console.log(result);
        });
        // console.log(xmlData);
    };
    reader.readAsText(this.fileToParse);
    this.activeModal.close();
  }
}