import { Injectable } from '@angular/core';
import * as xml2js from "xml2js";
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
      xml2js.parseString(
        xmlData, {
          // tagNameProcessors: [(name)=>{console.log(name); return name;}],
          attrkey: "attribute",
          charkey: "text",
          // explicitCharkey: true,
          // explicitRoot: false,
          // xmlns: true,
          explicitChildren: true,
          childkey: "children",
          preserveChildrenOrder: true,
          // charsAsChildren: true,
        },
        function (err, result) {
          resolve(result);
      });
    };
    reader.readAsText(fileToParse);
    });
  }

  saveasXML(){
    var builder = new xml2js.Builder({
      attrkey: "attribute",
      charkey: "text",
    });
    var xml = builder.buildObject(removeKeys(this.xmlDom, ['name', 'children']));

    const blob = new Blob([xml], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "default.xml");
  }

  nameConverter(){
    var jsonText: string = JSON.stringify(this.xmlDom, null, 4);
    const regex = /"#name":/gm;
    const subst = `"name":`;
    const result = jsonText.replace(regex, subst);
    this.xmlDom = JSON.parse(result);
  }

  changePropertyName = (obj: object, fromName:string, toName:string) => {
    Object.keys(obj).forEach(key => {
        //console.log(`key: ${key}, value: ${obj[key]}`)
        if (typeof obj[key] === 'string' && key === fromName) {
            obj[toName] = obj[fromName];
            delete obj[fromName];
        } else if (typeof obj[key] === 'object') {
            this.changePropertyName(obj[key], fromName, toName)
        }
    })
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