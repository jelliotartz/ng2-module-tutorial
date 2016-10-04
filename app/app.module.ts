import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent }  from './app.component'
import { HighlightDirective } from './highlight.directive'
import { TitleComponent } from './title.component'
import { UserService } from './user.service'

import { ContactModule } from './contact/contact.module'
import { routing } from './routing'

@NgModule({
  imports: [
    BrowserModule,
    ContactModule,
    routing,
  ],
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleComponent,
  ],
  providers: [
    UserService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
