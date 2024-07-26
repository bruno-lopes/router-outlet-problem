import { Component } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-page-not-found-component',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './page-not-found-component.component.html',
  styleUrl: './page-not-found-component.component.scss'
})
export class PageNotFoundComponentComponent {

}
