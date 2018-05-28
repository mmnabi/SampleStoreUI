import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCheckboxModule,
  MatListModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatCardModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatCardModule
  ],
  declarations: []
})
export class AppMaterialCustomModule { }
