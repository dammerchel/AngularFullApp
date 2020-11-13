import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  // registrationForm = new FormGroup({
  //   userName: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });

  registrationForm = this.fb.group({
    userName: ['Damian', Validators.required],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: ['']
    })
  });



  constructor(private fb:FormBuilder, public userService:UserService) { }

  ngOnInit(): void {
  }
  loadApiData() {
    this.registrationForm.patchValue({
      userName: 'Bruce',
      password: 'test',
      confirmPassword: 'test'      
    })
    this.userService.getData().subscribe(
      response => console.log('Succes!',response),
      error => console.error('Error!', error)
    )
  }

  onSubmit(){
    this.userService.register(this.registrationForm.value).subscribe(
      response => console.log('Succes!',response),
      error => console.error('Error!', error)
    );
  }

}
