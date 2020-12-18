import { Component, OnInit } from '@angular/core';
import { ArrayDataSource } from '@angular/cdk/collections';
import { NestedTreeControl } from '@angular/cdk/tree';
import { XmlProcessorService } from "../services/xml-processor.service";


@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  constructor(
    public xmlProcessor: XmlProcessorService
    ) { }
  
  treeControl = new NestedTreeControl<Node> (node => this.getChildElements(node));
  dataSource = new ArrayDataSource([this.xmlProcessor.xmlDom]);

  hasChild = (_: number, node: Node) => !!this.getChildElements(node) && this.getChildElements(node).length > 0;
  
  ngOnInit(): void {
  }

  getChildElements(node: Node){
    let childElements: Node[] = [];
    let allChildren: Node[] = Object.values(node.childNodes);

    for (const child of allChildren) {
      if(child.nodeType == 1)
      childElements.push(child);
    }

    return childElements;
  }
}
