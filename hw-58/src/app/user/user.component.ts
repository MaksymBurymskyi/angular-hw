import { Component, Input } from '@angular/core';
import { NameGroupService } from '../service/nameGroup.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() name = ''
  @Input() status = ''
  @Input() img = ''
  
  nameInputValue: string = '';
  statusInputValue: string = '';
  newName: string = '';
  newStatus: string = '';

  constructor(
    public nameGroupService: NameGroupService
  ) {}

  ngOnInit() {
    this.newName = this.name;
    this.newStatus = this.status;
  }

  onEditName() {
    this.newName = this.nameInputValue;
    this.nameInputValue = '';
  }
  onEditStatus() {
    this.newStatus = this.statusInputValue;
    this.statusInputValue = '';
  }
}
