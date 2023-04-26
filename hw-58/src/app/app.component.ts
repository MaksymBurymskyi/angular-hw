import { Component, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { UsersService } from './service/users.service';
import { PopUpComponent } from './pop-up/pop-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(public usersService: UsersService) {}

  @ViewChild('popUp', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef
  private componentRef!: ComponentRef<PopUpComponent>

  showPopUp() {
    this.componentRef = this.viewRef.createComponent(PopUpComponent);
    this.componentRef.instance.close.subscribe(()=>{this.viewRef.clear()})
  }
}

