import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {EmployeeActionsService} from './employee-actions.service';
import {CreateComponent} from './create/create.component';
import {UpdateComponent} from './update/update.component';
import {ListComponent} from './list/list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material';
import {CrudComponent} from './crud/crud.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    CreateComponent,
    UpdateComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonToggleModule
  ],
  providers: [EmployeeActionsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
