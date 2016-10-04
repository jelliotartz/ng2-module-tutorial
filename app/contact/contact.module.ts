import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { routing } from './contact.routing'
import { AwesomePipe } from './awesome.pipe'

import { ContactComponent } from './contact.component'
import { ContactService } from './contact.service'
import { HighlightDirective } from './highlight.directive'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
  ],
  declarations: [
    ContactComponent,
    HighlightDirective,
    AwesomePipe,
  ],
  providers: [
    ContactService,
  ]
})
export class ContactModule { }
