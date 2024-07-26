import { Component } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-nav-actions',
  templateUrl: './nav-actions.component.html',
  styleUrl: './nav-actions.component.scss',
  standalone: true,
  imports: [SharedModule]
})
export class NavActionsComponent {

}
