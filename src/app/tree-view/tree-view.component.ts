import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { XmlProcessorService } from "../services/xml-processor.service";

export interface FlatTreeNode {
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

  treeControl: FlatTreeControl<FlatTreeNode>;

  treeFlattener: MatTreeFlattener<Node, FlatTreeNode>;

  dataSource: MatTreeFlatDataSource<Node, FlatTreeNode>;

  constructor(public xmlProcessor: XmlProcessorService){
    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren);

    this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    this.dataSource.data = [this.xmlProcessor.xmlDom];
  }
  
  transformer(node: Node, level: number) {
    return {
      name: node.nodeName,
      type: node.nodeType,
      level: level,
      expandable: !!this.getChildren(node) && this.getChildren(node).length > 0,
    };
  }

  getLevel(node: FlatTreeNode) {
    return node.level;
  }

  isExpandable(node: FlatTreeNode) {
    return node.expandable;
  }

  hasChild(index: number, node: FlatTreeNode) {
    return node.expandable;
  }

  getChildren(node: Node): Node[] | null | undefined {
    let childElements: Node[] = [];
    let allChildren: Node[] = Object.values(node.childNodes);

    for (const child of allChildren) {
      if(child.nodeType == 1)
      childElements.push(child);
    }

    return childElements;
  }
  
  ngOnInit(): void {
  }
}
