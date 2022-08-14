import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
registrationForm:FormGroup
user:any={}
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    // this.registrationForm=new FormGroup({
    //   userName:new FormControl(null, Validators.required),
    //   email: new FormControl(null,[Validators.required, Validators.email]),
    //   password:new FormControl(null,[Validators.required, Validators.minLength(8)]),
    //   confirmpassword:new FormControl(null, Validators.required),
    //   mobile:new FormControl('',[Validators.required, Validators.maxLength(11)])

    // },this.passwordMatchingValidator);
    this.createRegistrationForm();
  }
  passwordMatchingValidator(fg:FormGroup):Validators
  {
    return fg.get('password').value==fg.get('confirmpassword').value ? null :
    {notmatch:true};
  }
  //Getter methods for UserName
  get userName()
  {
    return this.registrationForm.get('userName') as FormControl;
  }
    //Getter methods for UserName
    get email()
    {
      return this.registrationForm.get('email') as FormControl;
    }
      //Getter methods for UserName
  get password()
  {
    return this.registrationForm.get('password') as FormControl;
  }
    //Getter methods for UserName
    get confirmpassword()
    {
      return this.registrationForm.get('confirmpassword') as FormControl;
    }
    get mobile()
    {
      return this.registrationForm.get('mobile') as FormControl;
    }

  onSubmit()
  {
    this.user=Object.assign(this.user,this.registrationForm.value);
     this.addUser(this.user);
     this.registrationForm.reset();

  }
  addUser(user)
  {
    let users=[];
    if(localStorage.getItem('Users'))
    {
      users=JSON.parse(localStorage.getItem('Users'));
      users=[users,...users];
    }
    else{
      users=[user];
    }
    localStorage.setItem('Users',JSON.stringify(users));
  }
  createRegistrationForm()
  {
    this.registrationForm=this.fb.group({
      userName:new FormControl(null, Validators.required),
      email: new FormControl(null,[Validators.required, Validators.email]),
      password:new FormControl(null,[Validators.required, Validators.minLength(8)]),
      confirmpassword:new FormControl(null, Validators.required),
      mobile:new FormControl('',[Validators.required, Validators.maxLength(11)])
    },{validators:this.passwordMatchingValidator});
  }

}
