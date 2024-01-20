import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-drop-down-button',
  standalone: true,
  imports: [MatFormFieldModule,MatSelectModule],
  templateUrl: './drop-down-button.component.html',
  styleUrl: './drop-down-button.component.css'
})
export class DropDownButtonComponent {
  isDropdownOpen: boolean = false;

  toggleDropDown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

}
