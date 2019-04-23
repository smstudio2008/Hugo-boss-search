import { HomeModule } from './modules/module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { InitialAppState, INITIAL_STATE } from './shared/redux/interface/initialState';
import { rootReducer } from './shared/redux/reducers/reducer';
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
@NgModule({
  declarations: [AppComponent, NavBarComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule, NgReduxModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<InitialAppState>, private devTools: DevToolsExtension) {
    const enhancers = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
  }
}
