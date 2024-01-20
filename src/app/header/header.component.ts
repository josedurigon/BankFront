import { Component } from '@angular/core';
import { DropDownButtonComponent } from '../drop-down-button/drop-down-button.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DropDownButtonComponent, CommonModule, NgbModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
