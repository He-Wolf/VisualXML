import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { XmlProcessorService } from "../services/xml-processor.service";

export interface FlatTreeElement {
  name: string;
  level: number;
  expandable: boolean;
}

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  treeControl: FlatTreeControl<FlatTreeElement>;

  treeFlattener: MatTreeFlattener<Element, FlatTreeElement>;

  dataSource: MatTreeFlatDataSource<Element, FlatTreeElement>;

  ngOnInit(): void {
  }

  constructor(public xmlProcessor: XmlProcessorService){
    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren);

    this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    this.dataSource.data = Object.values(this.xmlProcessor.xmlDom.children);
  }
  
  transformer(element: Element, level: number) {
    return {
      name: element.nodeName,
      elementInstance: element,
      level: level,
      expandable: !!element.childElementCount,
    };
  }

  getLevel(element: FlatTreeElement) {
    return element.level;
  }

  isExpandable(element: FlatTreeElement) {
    return element.expandable;
  }

  hasChild(index: number, element: FlatTreeElement) {
    return element.expandable;
  }

  getChildren(element: Element): Element[] | null | undefined {
  return Object.values(element.children);
  }
  
  activateElement(element: Element){
    this.xmlProcessor.activeElement = element;
    console.log(this.xmlProcessor.activeElement);
  }
}
