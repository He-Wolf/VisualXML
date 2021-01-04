import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ancestors',
  templateUrl: './ancestors.component.html',
  styleUrls: ['./ancestors.component.css']
})
export class AncestorsComponent implements OnChanges {

  @Input() actElement: Element;

  ancestors: Element[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.ancestors = [];
    this.getAncestors();
  }
  
  private getAncestors(){
    console.log('getAncestor1: ', this.actElement);
    console.log(this.actElement.parentElement);
    let aElement = this.actElement;
    while(aElement.parentElement!=null){
      let parentElement = aElement.parentElement
      console.log('getAncestor2: ', parentElement);
      this.ancestors.push(parentElement);
      aElement = parentElement;
    }
    this.ancestors.reverse();
    console.log('getAncestor3: ', this.ancestors);
  }
}
