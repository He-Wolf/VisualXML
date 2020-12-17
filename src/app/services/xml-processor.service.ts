import { Injectable } from '@angular/core';
import * as xml2js from "xml2js";
import { DOMParser } from "xmldom";
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class XmlProcessorService {

  xmlDom: any = null;

  constructor() { }

  parseXML(fileToParse: File){
    const reader = new FileReader();

    return new Promise((resolve, reject)=>{
      
    reader.onload = (evt) => {
      const xmlData: string = (evt as any).target.result;
      const xmlDom = new DOMParser().parseFromString(xmlData);
      resolve(xmlDom);
    };
    reader.readAsText(fileToParse);
    });
  }

  saveasXML(){
    var builder = new xml2js.Builder({
      attrkey: "#attribute",
      charkey: "#text",
    });
    var xml = builder.buildObject(this.xmlDom);

    const blob = new Blob([xml], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "default.xml");
  }
}
