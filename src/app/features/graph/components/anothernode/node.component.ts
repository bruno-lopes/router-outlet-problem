import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import MyNode from '@features/graph/models/my-node';

@Component({
  selector: 'app-another-node',
  templateUrl: './node.component.html',
  styleUrl: './node.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class AnotherNodeComponent {


  @Input()
  node!: MyNode

  @Input()
  selected!: boolean

  @Input()
  callback!: () => void

  clickNode() {
    this.callback();
  }

  addRequirement(requirement: string) {
    console.log("Adding requirement", requirement)
  }

  getKeys(object: Object): any[] {
    return Object.keys(object);
  }

}
