import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, NgbModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  isDropdownOpen: boolean = false;

  toggleDropDown(){
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown(){
    this.isDropdownOpen = false;
  }

}
