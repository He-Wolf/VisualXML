import { Component, OnInit } from '@angular/core';
import { FileStateService } from "../services/file-state.service";
import { XmlProcessorService } from "../services/xml-processor.service";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css'],
  host: { 'class': 'h-100 d-flex' }
})
export class ErrorPageComponent implements OnInit {

  constructor(public xmlProcessor: XmlProcessorService, public fileStateService: FileStateService) { }

  ngOnInit(): void {
    // if (this.xmlProcessor.xmlDom) {
    //   const parseErrors = this.xmlProcessor.xmlDom.getElementsByTagName("parsererror");
    //   if (parseErrors.length) {
    //     const parseDiv = parseErrors[0].getElementsByTagName("div");
    //     console.log(parseDiv)
    //     const parseSourcetext = parseErrors[0].getElementsByTagName("sourcetext");
    //     console.log(parseSourcetext)
    //   }
    // }
  }

  getErrorMessage(){
    const parseErrors = this.xmlProcessor.xmlDom.getElementsByTagName("parsererror");
    console.log(parseErrors);
    if(parseErrors.length) {
      const parseDiv = parseErrors[0].getElementsByTagName("div");
      console.log(parseDiv);
      if(parseDiv.lenght){
        console.log(parseDiv[0].innerText);
        return parseDiv[0].innerText;
      }
      const parseSourcetext = parseErrors[0].getElementsByTagName("sourcetext");
      console.log(parseSourcetext);
      if(parseSourcetext.lenght) {
        console.log(parseErrors[0].innerText);
        console.log(parseSourcetext[0].innerText);
        return `${parseErrors[0].innerText}
        ${parseSourcetext[0].innerText}`
      }
    }
  }

}
