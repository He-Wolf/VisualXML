import { Component, OnInit } from '@angular/core';
import { XmlProcessorService } from "../services/xml-processor.service";

@Component({
  selector: 'app-child-element-view',
  templateUrl: './child-element-view.component.html',
  styleUrls: ['./child-element-view.component.css']
})
export class ChildElementViewComponent implements OnInit {

  constructor(public xmlProcessor: XmlProcessorService) { }

  ngOnInit(): void {
  }

  selectElementById(uuid:string){
    let actButton = document.getElementById(uuid);
    actButton.click();
    actButton.focus();
  }
}
