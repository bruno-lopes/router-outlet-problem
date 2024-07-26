import { Component } from '@angular/core';
import { CoreUIModule } from './../core-ui/core-ui.module';

import { RouterOutlet } from '@angular/router';
import { IconSetService } from '@coreui/icons-angular';
import { MaterialModule } from '../material/material.module';
import { navItems } from './_nav';
import { CoreUIAdminFooterComponent } from './core-ui-admin-footer/core-ui-admin-footer.component';
import { CoreUIAdminHeaderComponent } from './core-ui-admin-header/core-ui-admin-header.component';
import { iconSubset } from './icons/icon-subset';

@Component({
  selector: 'app-core-ui-admin-layout',
  templateUrl: './core-ui-admin-layout.component.html',
  styleUrls: ['./core-ui-admin-layout.component.scss'],
  standalone: true,
  imports: [MaterialModule, CoreUIModule, RouterOutlet, CoreUIAdminFooterComponent, CoreUIAdminHeaderComponent]

})
export class CoreUIAdminLayoutComponent {
  public navItems = navItems;

  constructor(private iconSetService: IconSetService) {
    this.iconSetService.icons = { ...iconSubset };
  }
}
