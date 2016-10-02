//tslint:disable

import {
  Component,
  OnInit,
} from '@angular/core'

import {
  Contact,
  ContactService,
} from './contact.service'

import { UserService } from '../user.service'

@Component({
  moduleId: module.id,
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css'],
})
export class ContactComponent implements OnInit {
  contact: Contact
  contacts: Contact[]

  msg = 'loading contacts...'
  userName = ''

  constructor(
    private contactService: ContactService,
    userService: UserService
    ) {
    this.userName = userService.userName
  }

  ngOnInit() {
    this.contactService.getContacts().then(contacts => {
      this.msg = ''
      this.contacts = contacts
      this.contact = contacts[0]
    })
  }

  next() {
    let ix = 1 + this.contacts.indexOf(this.contact)
    if (ix >= this.contacts.length) {
      ix = 0
    }
    this.contact = this.contacts[ix]
  }

  onSubmit() {
    this.displayMessage('saved ' + this.contact.name)
  }

  newContact() {
    this.displayMessage('new contact')
    this.contact = {id: 42, name: ''}
    this.contacts.push(this.contact)
  }

  displayMessage(msg: string) {
    this.msg = msg
    setTimeout(() => this.msg = '', 1500)
  }
}
