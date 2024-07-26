import { Component } from '@angular/core';
import { AnotherNodeComponent } from '@features/graph/components/anothernode/node.component';
import MyNode from '@features/graph/models/my-node';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [SharedModule,
    AnotherNodeComponent],
  standalone: true
})
export class DashboardComponent {
  public visible = false;

  public liveDemoVisible = false;



  fakeNode: MyNode;

  selected: boolean;

  onFakeNodeClick = () => {
    this.fakeNode.data.selected = !this.fakeNode.data.selected

  }
  onNodeClick2 = (currentNodeId: string) => {

    this.fakeNode = {
      ...this.fakeNode,
      data: {
        selected: !(this.fakeNode.data.selected)
      }
    }

  }

  constructor() {
    this.fakeNode = {
      id: 'abc',
      data: {
        selected: false
      }
    }
    this.selected = false;
  }
}
