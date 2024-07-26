import { NgModule } from "@angular/core";
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';

@NgModule({
  imports: [
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatDialogModule,
    MatListModule,
    MatIconModule,
    MatTreeModule,
    MatTooltipModule
  ],
  exports: [
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatDialogActions,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatBadgeModule,
    MatIconModule,
    MatTreeModule, MatTooltipModule

  ]

})
export class MaterialModule { }
