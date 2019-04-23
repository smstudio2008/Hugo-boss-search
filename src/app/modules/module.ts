import { HomePageModule } from './components/home-page/home-page.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './routes/core-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CoreRoutingModule, HomePageModule],
  exports: [RouterModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {}
