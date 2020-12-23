import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { XmlProcessorService } from "../services/xml-processor.service";

interface XmlNode {
  name: string;
  children?: XmlNode[];
}

interface FlatXmlNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  constructor(
    public xmlProcessor: XmlProcessorService){
      this.dataSource.data = [Object.values(<XmlNode>this.xmlProcessor.xmlDom)[0]];
    }

  private _transformer = (node: XmlNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<FlatXmlNode>(
    node => node.level,
    node => node.expandable
  );
  
  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );
  
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: FlatXmlNode) => !!node.expandable;

  ngOnInit(): void {
  }

}
