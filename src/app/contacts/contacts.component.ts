import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contact: Contact = {
    id: 1,
    name: 'Developer',
    phone: '(+233) 55 183 8987'
  }
  constructor() { }

  ngOnInit(): void {

  }

}


