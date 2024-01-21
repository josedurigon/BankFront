import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {'path':'',component:HomeComponent},
    {'path':'login', component:LoginPageComponent},
    {'path':'about', component:AboutComponent}
];
