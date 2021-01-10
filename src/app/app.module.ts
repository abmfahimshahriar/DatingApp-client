import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from "./core/core.module";
import {MembersModule} from "./members/members.module";
import {ToastrModule} from "ngx-toastr";
import {ErrorInterceptor} from "./interceptors/error.interceptor";
import {JwtInterceptor} from "./interceptors/jwt.interceptor";
import {LoadingInterceptor} from "./interceptors/loading.interceptor";
import {AdminModule} from "./admin/admin.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    MembersModule,
    AdminModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass: ErrorInterceptor,multi: true},
    {provide: HTTP_INTERCEPTORS,useClass: JwtInterceptor,multi: true},
    {provide: HTTP_INTERCEPTORS,useClass: LoadingInterceptor,multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
