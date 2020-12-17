import { Component, OnInit } from '@angular/core';
import { ArrayDataSource } from '@angular/cdk/collections';
import { NestedTreeControl } from '@angular/cdk/tree';
import { XmlProcessorService } from "../services/xml-processor.service";

interface XmlNode {
  name: string;
  children?: XmlNode[];
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
  
  treeControl = new NestedTreeControl<XmlNode> (node => node.children);
  dataSource = new ArrayDataSource([Object.values(this.xmlProcessor.xmlDom)[0]]);

  hasChild = (_: number, node: XmlNode) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
  }

}
