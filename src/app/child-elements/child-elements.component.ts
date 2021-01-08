import { Component, OnInit } from '@angular/core';
import { XmlProcessorService } from "../services/xml-processor.service";
import { GuidShareService } from "../services/guid-share.service";

@Component({
  selector: 'app-child-elements',
  templateUrl: './child-elements.component.html',
  styleUrls: ['./child-elements.component.css']
})
export class ChildElementsComponent implements OnInit {

  constructor(public xmlProcessor: XmlProcessorService, public guidSender: GuidShareService) { }

  ngOnInit(): void {
  }

  selectElementById(uuid:string){
    this.guidSender.changeGuid(uuid);
  }
}
