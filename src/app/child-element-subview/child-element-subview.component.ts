import { Component, OnInit } from '@angular/core';
import { XmlProcessorService } from "../services/xml-processor.service";
import { GuidShareService } from "../services/guid-share.service";

@Component({
  selector: 'app-child-element-subview',
  templateUrl: './child-element-subview.component.html',
  styleUrls: ['./child-element-subview.component.css']
})
export class ChildElementSubviewComponent implements OnInit {

  constructor(public xmlProcessor: XmlProcessorService, public guidSender: GuidShareService) { }

  ngOnInit(): void {
  }

  selectElementById(uuid:string){
    this.guidSender.changeGuid(uuid);
  }
}
