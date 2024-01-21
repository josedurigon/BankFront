import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HeaderComponent } from '../../Components/header/header.component';
import { Router } from '@angular/router';
import { ContactUsComponent } from '../../Components/contact-us/contact-us.component';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent,ContactUsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations:[
    trigger('typing',[
      state('start', style({ width: '0%' })),
      state('end', style({ width: '100%' })),
      transition('start => end', animate('3s'))
    ])
  ]
})
export class AboutComponent implements OnInit {
  
  typingState = 'start'; 
  fade: boolean = false;


  constructor(private router:Router){}

  isAboutUsPage(): boolean {
    return this.router.url.includes('/about-us');
  }
  
  ngOnInit(): void {
      setTimeout(()=> {
        this.typingState = 'end';
      },1000)

      if(this.isAboutUsPage() == true){
        this.fade = true;
      }

  }


}
