import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PushPipe } from '@ngrx/component';
import { HighlightModule } from 'ngx-highlightjs';
import { CoreUIModule } from '../layouts/core-ui/core-ui.module';
import { MaterialModule } from '../layouts/material/material.module';
import { NavActionsComponent } from './components/nav-actions/nav-actions.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, CoreUIModule, NavActionsComponent, CdkTableModule, PushPipe],
  exports: [NavActionsComponent, CommonModule, ReactiveFormsModule, CoreUIModule, MaterialModule, CdkTableModule, PushPipe, HighlightModule]
})
export class SharedModule { }
