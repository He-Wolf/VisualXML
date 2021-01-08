import { Component, OnInit } from '@angular/core';
import { XmlProcessorService } from "../services/xml-processor.service";

@Component({
  selector: 'app-document-data',
  templateUrl: './document-data.component.html',
  styleUrls: ['./document-data.component.css']
})
export class DocumentDataComponent implements OnInit {

  constructor(public xmlProcessor: XmlProcessorService) { }

  ngOnInit(): void {
  }

}
