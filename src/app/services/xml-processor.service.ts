import { Injectable } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import * as xml2js from "xml2js";

@Injectable({
  providedIn: 'root'
})
export class XmlProcessorService {

  xmlDom: any = null;

  constructor() { }

  parseXML(fileToParse: File){
    const reader = new FileReader();
    reader.onload = (evt) => {
        const xmlData: string = (evt as any).target.result;
        xml2js.parseString(xmlData, function (err, result) {
          // this.xmlDom = result;
          // console.log(this.xmlDom);
          console.log(result);
        });
    };
    reader.readAsText(fileToParse);
  }
}
