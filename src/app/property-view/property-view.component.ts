import { Component, OnInit } from '@angular/core';
import { XmlProcessorService } from "../services/xml-processor.service";

@Component({
  selector: 'app-property-view',
  templateUrl: './property-view.component.html',
  styleUrls: ['./property-view.component.css']
})
export class PropertyViewComponent implements OnInit {

  constructor(public xmlProcessor: XmlProcessorService) { }

  ngOnInit(): void {
  }

}
