import { Injectable } from '@angular/core';
import * as xmlParser from "fast-xml-parser";
import { saveAs } from 'file-saver';
import { j2xParser } from 'fast-xml-parser';
import * as he from 'he';


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

      var options = {
        attributeNamePrefix : "@_",
        attrNodeName: "attr", //default is 'false'
        textNodeName : "#text",
        ignoreAttributes : false,
        ignoreNameSpace : true,
        allowBooleanAttributes : false,
        parseNodeValue : true,
        parseAttributeValue : false,
        trimValues: true,
        cdataTagName: "__cdata", //default is 'false'
        cdataPositionChar: "\\c",
        parseTrueNumberOnly: false,
        arrayMode: true, //"strict"
        attrValueProcessor: (val, attrName) => he.decode(val, {isAttributeValue: true}),//default is a=>a
        tagValueProcessor : (val, tagName) => he.decode(val), //default is a=>a
        stopNodes: ["parse-me-as-string"]
      };
      resolve(xmlParser.parse(xmlData, options));
    };
    reader.readAsText(fileToParse);
    });
  }

  saveasXML(){
    //default options need not to set
    var defaultOptions = {
        attributeNamePrefix : "@_",
        attrNodeName: "@", //default is false
        textNodeName : "#text",
        ignoreAttributes : true,
        cdataTagName: "__cdata", //default is false
        cdataPositionChar: "\\c",
        format: false,
        indentBy: "  ",
        supressEmptyNode: false,
        tagValueProcessor: a=> he.encode(a, {useNamedReferences: true}),// default is a=>a
        attrValueProcessor: a=> he.encode(a, {isAttributeValue: true, useNamedReferences: true})// default is a=>a
    };
    var parser = new j2xParser(defaultOptions);
    var xml = parser.parse(this.xmlDom);

    const blob = new Blob([xml], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "default.xml");
  }
}
