import { Component, inject } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NgxGraphModule, Node } from '@swimlane/ngx-graph';

import { AnotherNodeComponent } from './components/anothernode/node.component';
import MyNode from './models/my-node';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',

  imports: [
    AnotherNodeComponent,
    SharedModule, NgxGraphModule,
  ],

  standalone: true,
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent {

  constructor() {
    this.fakeNode = {
      id: 'abc',
      data: {
        selected: false
      }
    }
  }

  fakeNode: MyNode


  onNodeClick = (currentNodeId: string) => {

    this.fakeNode = {
      ...this.fakeNode,
      data: {
        selected: !(this.fakeNode.data.selected)
      }
    }

  }
}
