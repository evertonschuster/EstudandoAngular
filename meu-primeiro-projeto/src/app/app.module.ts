import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { PipeComponent } from './pipe/pipe.component';
import { OrderPipe } from './order.pipe';
import { CounterComponent } from './counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { reducer as counterReducer } from './ngrx';

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    OrderPipe,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
