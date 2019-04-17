import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentListComponent } from './content-list.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ContentListComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [ContentListComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContentListModule {}
