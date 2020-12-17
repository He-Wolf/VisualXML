import { Component, OnInit } from '@angular/core';
import { ArrayDataSource } from '@angular/cdk/collections';
import { NestedTreeControl } from '@angular/cdk/tree';
import { XmlProcessorService } from "../services/xml-processor.service";

interface XmlNode {
  nodeName?: string;
  childNodes?: XmlNodeArray;
  hasChildNodes(): boolean;
}

interface XmlNodeArray {
  [index: number]: XmlNode;
}

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  constructor(
    public xmlProcessor: XmlProcessorService
    ) { }
  
  treeControl = new NestedTreeControl<XmlNode> (node => Object.values(node.childNodes));
  dataSource = new ArrayDataSource([this.xmlProcessor.xmlDom]);

  // hasChild = (_: number, node: XmlNode) => {console.log(Object.values(node.childNodes)); return !!Object.values(node.childNodes) && Object.values(node.childNodes).length > 0};
  // hasChild = (_: number, node: XmlNode) => {console.log(node.hasChildNodes()); return node.hasChildNodes();};
  hasChild = (_: number, node: XmlNode) => {
    console.log(node.hasChildNodes());
    console.log(typeof node);
    return node.hasChildNodes();};
  
  ngOnInit(): void {
  }

}
