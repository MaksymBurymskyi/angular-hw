import { Component } from '@angular/core';
import { NameGroupService } from '../service/nameGroup.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public nameGroupService: NameGroupService
  ) {}

}
