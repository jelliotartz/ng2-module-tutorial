import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { HighlightDirective } from './highlight.directive'
import { AppComponent }  from './app.component'
import { TitleComponent } from './title.component'

import { UserService } from './user.service'

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleComponent,
  ],
  providers: [
    UserService,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
