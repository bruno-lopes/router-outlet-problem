import { NgModule, importProvidersFrom } from "@angular/core";
import { provideAnimations } from '@angular/platform-browser/animations';
import { AccordionModule, AvatarModule, BadgeModule, BreadcrumbModule, ButtonModule, CalloutModule, CardModule, CollapseModule, DropdownModule, FormModule, GridModule, HeaderModule, ListGroupModule, NavModule, NavbarModule, ProgressModule, SidebarModule, SpinnerModule, UtilitiesModule, WidgetModule } from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';

@NgModule({
  imports: [
    AccordionModule, AvatarModule, BadgeModule, BreadcrumbModule, ButtonModule, CalloutModule, CardModule, CollapseModule, DropdownModule, FormModule, GridModule, HeaderModule, ListGroupModule, NavModule, NavbarModule, ProgressModule, SidebarModule, SpinnerModule, UtilitiesModule, WidgetModule, IconModule,
  ],
  exports: [
    AccordionModule, AvatarModule, BadgeModule, BreadcrumbModule, ButtonModule, CalloutModule, CardModule, CollapseModule, DropdownModule, FormModule, GridModule, HeaderModule, ListGroupModule, NavModule, NavbarModule, ProgressModule, SidebarModule, SpinnerModule, UtilitiesModule, WidgetModule, IconModule,
  ],
  providers: [
    importProvidersFrom(SidebarModule, DropdownModule),
    IconSetService,
    provideAnimations(),
    // { provide: BreadcrumbRouterService, useClass: yourBreadcrumbRouterService }
  ]

})
export class CoreUIModule { }
