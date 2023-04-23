import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'home-work';
  users: any;
  ischecked: boolean = false;
  
  
  constructor(private http: HttpClient) {
    this.http.get('../assets/users.json').subscribe(data => {
      this.users = data;
    });
  }

  submit(form: any) {
    this.ischecked = false
    this.users.forEach((user: any) => {
      if (user.email === form.value.email) {
        this.ischecked = true;
      }
    });
    if (form.valid && !this.ischecked) {
     console.log(form.value); 
    } else {
      form.control.markAllAsTouched()
    }
  }
}
