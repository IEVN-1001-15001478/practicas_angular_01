import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon';
import{MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  exports:[
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
