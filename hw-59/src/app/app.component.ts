import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'home-work';
  userEmails: any = [];
  form!: FormGroup;

  constructor(private http: HttpClient) {
    this.http.get('../assets/users.json').subscribe((data: any = []) => {
      data.forEach((element: any) => {
        this.userEmails.push(element.email)
      });
      this.ngOnInit();
    });   
  }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]+$')]),
      email: new FormControl('', [Validators.required, Validators.email],  [this.checkEmail.bind(this)]),
      password: new FormControl('', [Validators.required, Validators.minLength(7)]),
    });
  }

  async checkEmail(control: any): Promise<any> {
    const emails: any = this.userEmails;
    return new Promise(resolve => {
      setTimeout(() => { 
        if(emails.includes(control.value)){
          control.markAllAsTouched()
          resolve({uniqEmail: true})
        } else {
          resolve(null)
        }
      }, 2000)
    });
  }

  submit() {
    this.form.valid && console.log(this.form);
  }
}

