import { Component } from '@angular/core';
import { FooterComponent } from '@coreui/angular';
import { CoreUIModule } from '../../core-ui/core-ui.module';

@Component({
  selector: 'app-core-ui-admin-footer',
  templateUrl: './core-ui-admin-footer.component.html',
  styleUrls: ['./core-ui-admin-footer.component.scss'],
  imports: [CoreUIModule,],
  standalone: true,
})
export class CoreUIAdminFooterComponent extends FooterComponent {
  constructor() {
    super();
  }
}
