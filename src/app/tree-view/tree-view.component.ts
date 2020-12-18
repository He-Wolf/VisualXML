import { Component, OnInit } from '@angular/core';
import { ArrayDataSource } from '@angular/cdk/collections';
import { NestedTreeControl } from '@angular/cdk/tree';
import { XmlProcessorService } from "../services/xml-processor.service";

interface XmlNode {
  [index: string]: XmlNode[]
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
  
  treeControl = new NestedTreeControl<XmlNode> (node => {
    const {attr, text, ...children} = node;
    console.log('children: ',children);

    let arr = []
    for (let child in children){
      console.log('key: ', child)
      console.log('value: ', children[child])
      let newElement = {}
      newElement[child] = children[child]
      console.log('new member: ', newElement)
      arr.push(newElement)
    }
    console.log('array: ',arr);

    return arr;
  });

  dataSource = new ArrayDataSource([this.xmlProcessor.xmlDom]);

  hasChild = (_: number, node: XmlNode) => {
    const {attr, text, ...children} = node;
    console.log('haschild children: ', children);
    return !!children;};

  ngOnInit(): void {
  }

}
