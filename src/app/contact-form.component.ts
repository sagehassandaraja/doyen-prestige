import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm;

  constructor(private fb: FormBuilder) {
    this.contactForm = fb.group({
      fName: ['', Validators.required],
      lName: '',
      email:['', Validators.email],
      msg: ''

    })
  }

  get email() { return this.contactForm.get('email'); }

  ngOnInit() {
  }

}
