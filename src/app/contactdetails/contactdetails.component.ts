import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators, FormControl, MinLengthValidator} from '@angular/forms'
@Component({
  selector: 'app-contactdetails',
  templateUrl: './contactdetails.component.html',
  styleUrls: ['./contactdetails.component.css']
})
export class ContactdetailsComponent implements OnInit {

  constructor(public _fbobj :  FormBuilder) { }
  contactForm = this._fbobj.group({
    firstname :['',[Validators.required]],
    lastname : ['',[Validators.required]],
    email : ['',[Validators.email]],
    phone : ['',[Validators.required,Validators.minLength(10)]],
    address : ['',[Validators.required]]

  });

  SetData()
  {
    this.contactForm.setValue(
      {
        firstname : 'Kiran',
        lastname : 'Khade',
        email :  'kiran.khade2008@gmail.com',
        phone : '9637898945',
        address :'Pune'
      }
    )
  }

  ngOnInit() {
  }

}
