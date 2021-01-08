import { Component, OnInit } from '@angular/core';
import { XmlProcessorService } from "../services/xml-processor.service";

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  constructor(public xmlProcessor: XmlProcessorService) { }

  ngOnInit(): void {
  }

}
