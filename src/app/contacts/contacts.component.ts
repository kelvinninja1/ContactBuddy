import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';

import { CONTACTS } from '../mock-contacts';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts = CONTACTS;
  contact: Contact = {
    id: 1,
    name: 'Developer',
    phone: '(+233) 55 183 8987'
  }
  constructor() { }

  ngOnInit(): void {
  }

  selectedContact?: Contact;
  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }
}


