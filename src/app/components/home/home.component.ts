import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isSmallScreen!: boolean;
  isMediumScreen!: boolean;
  isLargeScreen!: boolean;

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });
  }

  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 768;
    this.isMediumScreen = window.innerWidth >= 768 && window.innerWidth < 1024;
    this.isLargeScreen = window.innerWidth >= 1024;
  }



}
