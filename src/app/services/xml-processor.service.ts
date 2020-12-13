import { Injectable } from '@angular/core';
import * as xml2js from "xml2js";

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
      xml2js.parseString(xmlData, function (err, result) {
        resolve(result);
      });
    };
    reader.readAsText(fileToParse);
    });
  }
}
