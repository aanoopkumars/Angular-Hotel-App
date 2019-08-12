import { NgModule } from '@angular/core';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';

// @NgModule({
//   imports: [MatDatepickerModule, MatFormFieldModule],
//   exports: [MatDatepickerModule, MatFormFieldModule]
// })

@NgModule({
  imports: [MatButtonModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule,
            MatTabsModule],
  exports: [MatButtonModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule,
            MatTabsModule]
})

export class MaterialModule {

}
