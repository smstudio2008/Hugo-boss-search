import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchBoxComponent } from './search-box/search-box.component';
@NgModule({
  declarations: [HomePageComponent, SearchBoxComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
