import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class XmlProcessorService {

  xmlDom: any = null;

  activeElement: Element = null;

  constructor() { }

  parseXML(fileToParse: File){
    const reader = new FileReader();

    return new Promise((resolve, reject)=>{
      
    reader.onload = (evt) => {
      const xmlData: string = (evt as any).target.result;
      const xmlDom = new DOMParser().parseFromString(xmlData, 'text/xml');
      resolve(xmlDom);
    };
    reader.readAsText(fileToParse);
    });
  }

  saveasXML(){
    const xmlSerializer = new XMLSerializer();
    const xml = xmlSerializer.serializeToString(this.xmlDom);

    const blob = new Blob([xml], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "default.xml");
  }

  addUUID(){
    let allElements = this.xmlDom.querySelectorAll("*");
    
    for (const element of allElements) {
      element["uuid"] = uuidv4();
    }

    console.log(allElements.length);
    console.log(allElements);
  }
}
