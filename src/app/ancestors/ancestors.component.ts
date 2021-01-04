import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { XmlProcessorService } from "../services/xml-processor.service";

@Component({
  selector: 'app-ancestors',
  templateUrl: './ancestors.component.html',
  styleUrls: ['./ancestors.component.css']
})
export class AncestorsComponent implements OnChanges {

  @Input() actElement: Element;

  ancestors: Element[] = [];

  constructor(public xmlProcessor: XmlProcessorService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.ancestors = [];
    this.getAncestors();
  }
  
  private getAncestors(){
    let aElement = this.actElement;
    while(aElement.parentElement!=null){
      let parentElement = aElement.parentElement
      this.ancestors.push(parentElement);
      aElement = parentElement;
    }
    this.ancestors.reverse();
  }

  selectElementById(uuid:string){
    let actButton = document.getElementById(uuid);
    actButton.click();
    actButton.focus();
  }
}
