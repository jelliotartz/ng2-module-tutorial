import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { HighlightDirective } from './contact/highlight.directive'
import { AppComponent }  from './app.component'
import { TitleComponent } from './title.component'

import { AwesomePipe } from './contact/awesome.pipe'
import { ContactComponent } from './contact/contact.component'
import { HighlightDirective as ContactHighlightDirective } from './contact/highlight.directive'

import { UserService } from './user.service'
import { ContactService } from './contact/contact.service'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleComponent,
    AwesomePipe,
    ContactComponent,
    ContactHighlightDirective,
  ],
  providers: [
    UserService,
    ContactService,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
