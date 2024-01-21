import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { DropDownButtonComponent } from './Components/drop-down-button/drop-down-button.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,HeaderComponent,DropDownButtonComponent, RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bank-app';
}
