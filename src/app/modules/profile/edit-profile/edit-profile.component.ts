import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Profile } from '../user-profile';
import { ValidationService } from 'src/app/core/services/validation.service';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})


export class EditProfileComponent implements OnInit {
  genders=['male','female'];
  SignupForm:FormGroup;
  forbiddenUserNames=['geetha','puja'];
  dateOfbirth: Date;
  maxDate = new Date();

  ngOnInit(){
    this.SignupForm = new FormGroup({
      'userData': new FormGroup({
          'username':new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
          'email':new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmails),
      }),
      'gender':new FormControl('female'),
    });

    this.SignupForm.setValue({
      'userData':{
        'username':'geetha',
        'email':'geetha@gmail.com'
      },
      'gender':'female',
    })
  }

  onSubmit(){
    console.log(this.SignupForm);
  }

  // custom validations
  forbiddenNames(control: FormControl):{[s: string]: boolean}
  {
    if(this.forbiddenUserNames.indexOf(control.value)!=-1)
    {
      return {'nameisForbidden':true};
    }

    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any>|Observable<any>
  {
    const promise= new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value==='test@test.com')
        {
          resolve({'emailIsForbidden':true});
        }
        else{
               resolve(null);
        }
       
      },1500);
    });
    return promise;
  }

}
