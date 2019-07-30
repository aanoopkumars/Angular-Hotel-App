import { NgModule } from '@angular/core';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

// @NgModule({
//   imports: [MatDatepickerModule, MatFormFieldModule],
//   exports: [MatDatepickerModule, MatFormFieldModule]
// })

@NgModule({
  imports: [MatButtonModule],
  exports: [MatButtonModule]
})

export class MaterialModule {

}
