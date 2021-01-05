import { Component, OnInit } from '@angular/core';
import { XmlProcessorService } from "../services/xml-processor.service";
import { GuidShareService } from "../services/guid-share.service";

@Component({
  selector: 'app-child-element-view',
  templateUrl: './child-element-view.component.html',
  styleUrls: ['./child-element-view.component.css']
})
export class ChildElementViewComponent implements OnInit {

  constructor(public xmlProcessor: XmlProcessorService, public guidSender: GuidShareService) { }

  ngOnInit(): void {
  }

  selectElementById(uuid:string){
    this.guidSender.changeGuid(uuid);
  }
}
