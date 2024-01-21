import { Component } from '@angular/core';
import { DropDownButtonComponent } from '../drop-down-button/drop-down-button.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DropDownButtonComponent, RouterLink,CommonModule, NgbModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router){}

  navigateToLogin(){
    this.router.navigate(['/login'])
  }

}
