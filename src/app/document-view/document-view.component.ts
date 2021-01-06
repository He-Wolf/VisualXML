import { Component, OnInit } from '@angular/core';
import { XmlProcessorService } from "../services/xml-processor.service";

@Component({
  selector: 'app-document-view',
  templateUrl: './document-view.component.html',
  styleUrls: ['./document-view.component.css']
})
export class DocumentViewComponent implements OnInit {

  constructor(public xmlProcessor: XmlProcessorService) { }

  ngOnInit(): void {
  }

}
