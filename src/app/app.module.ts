import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { PromiseComponent } from './promise/promise.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { DataService } from './data.service';
import { ObservableComponent } from './observable/observable.component';

import { FromEventComponent } from './observable/from-event/from-event.component';
import { ListComponent } from './observable/list/list.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomComponent } from './observable/custom/custom.component';
import { MapComponent } from './observable/map/map.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { FilterComponent } from './observable/filter/filter.component';
import { TapComponent } from './observable/tap/tap.component';
import { TakeComponent } from './observable/take/take.component';
import { RetryComponent } from './observable/retry/retry.component';
import { HttpClientModule } from '@angular/common/http';
import{AngularFireModule}from '@angular/fire/compat';

import { environment } from 'src/environments/environment';
import { DebounceTimeComponent } from './observable/debounce-time/debounce-time.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, PromiseComponent, AsyncAwaitComponent, ObservableComponent, FromEventComponent, ListComponent, IntervalComponent, OfFromComponent, ToArrayComponent, CustomComponent, MapComponent, PluckComponent, FilterComponent, TapComponent, TakeComponent, RetryComponent, DebounceTimeComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase)],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
