import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  

  isDropdownVisible: boolean = false;

  showDropdown() {
    this.isDropdownVisible = true;
  }

  hideDropdown() {
    this.isDropdownVisible = false;
  }

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
