import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import {
  BreadcrumbRouterService,
  ColorModeService,
  HeaderComponent,
  IBreadcrumbItem
} from '@coreui/angular';
import { Observable } from 'rxjs';
import { delay, filter, map, tap } from 'rxjs/operators';
import { CoreUIModule } from '../../core-ui/core-ui.module';
@Component({
  selector: 'app-core-ui-admin-header',
  imports: [CoreUIModule, RouterOutlet, RouterLink, CommonModule],
  templateUrl: './core-ui-admin-header.component.html',
  standalone: true
})
export class CoreUIAdminHeaderComponent extends HeaderComponent implements OnInit {

  readonly #activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  readonly #colorModeService = inject(ColorModeService);
  readonly colorMode = this.#colorModeService.colorMode;
  readonly #destroyRef: DestroyRef = inject(DestroyRef);

  public avatar$: Observable<string | undefined>;
  public loggedIn$: Observable<boolean>;

  public items: IBreadcrumbItem[] = [];
  constructor(/* private store: Store, */ private breadCrumbRouterService: BreadcrumbRouterService) {
    super();
    this.avatar$ = new Observable();
    this.loggedIn$ = new Observable()
    this.#colorModeService.localStorageItemName.set('router-layout-problem-default-theme-color');
    this.#colorModeService.eventName.set('ColorSchemeChange');


    this.#activatedRoute.queryParams
      .pipe(
        delay(1),
        map(params => <string>params['theme']?.match(/^[A-Za-z0-9\s]+/)?.[0]),
        filter(theme => ['dark', 'light', 'auto'].includes(theme)),
        tap(theme => {
          this.colorMode.set(theme);
        }),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe();
  }

  ngOnInit(): void {
  }

  @Input() sidebarId: string = 'sidebar';

}
