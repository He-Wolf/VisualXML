import { Component, OnInit } from '@angular/core';
import { FileStateService } from "../services/file-state.service";
import { XmlProcessorService } from "../services/xml-processor.service";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  host: { 'class': 'h-100 d-flex' }
})
export class ErrorComponent implements OnInit {

  constructor(public xmlProcessor: XmlProcessorService, public fileStateService: FileStateService) { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    const parseErrors = this.xmlProcessor.xmlDom.getElementsByTagName("parsererror");
    if(parseErrors.length) {
      const parseDiv = parseErrors[0].getElementsByTagName("div");
      console.log(parseErrors)
      //Chrome
      if(parseDiv[0]) {
        return parseDiv[0].textContent;
      }

      //Firefox
      else {
        const regex = /(.*Location:\s*)(\S*\s*)(.*)(:)/gm;
        const str = parseErrors[0].firstChild.textContent;
        const subst = `$1$3`;
        return str.replace(regex, subst);
      }
    }
  }

}
