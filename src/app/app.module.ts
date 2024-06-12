import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ContadorComponent } from './contador/contador.component';
import { counterReducer } from './counter.reducer';
import { OtroincrementComponent } from './otroincrement/otroincrement.component';
import { OtrodecrementComponent } from './otrodecrement/otrodecrement.component';
import { OtroresetComponent } from './otroreset/otroreset.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    OtroincrementComponent,
    OtrodecrementComponent,
    OtroresetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
