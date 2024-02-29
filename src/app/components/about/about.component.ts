import { AfterViewInit, Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],

  animations: [
    trigger('progressAnimation', [
      state('0', style({ width: '0%' })),
      state('100', style({ width: '100%' })),
      // transition('* => *', animate('0.5s ease'))
    ])
  ]
})
export class AboutComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    // this.simulateProgress()
  }
  constructor(){
    this.simulateProgress()
  }
  
  // value:number=80;
  num:number =0;
  htmlProgress: number = 0;
  cssProgress: number = 0;
  javascriptProgress: number = 0;
  angularProgress: number = 0;
  mongoDBProgress: number = 0;
  nodeJsProgress: number = 0;
  expressProgress: number = 0;
  
  

  simulateProgress() {
    setInterval(() => {
      if(this.htmlProgress < 80) {
        this.htmlProgress = (this.htmlProgress + 8);
      } 
      if(this.cssProgress < 80) {
        this.cssProgress = (this.cssProgress + 10);
      } 
      if(this.javascriptProgress < 70) {
        this.javascriptProgress = (this.javascriptProgress + 10);
      }
      if(this.javascriptProgress < 70) {
        this.javascriptProgress = (this.javascriptProgress + 10);
      } 
      if(this.angularProgress < 70) {
        this.angularProgress = (this.angularProgress + 10);
      } 
      if(this.mongoDBProgress < 60) {
        this.mongoDBProgress = (this.mongoDBProgress + 10);
      }  
      if(this.nodeJsProgress < 50) {
        this.nodeJsProgress = (this.nodeJsProgress + 10);
      }  
      if(this.expressProgress < 50) {
        this.expressProgress = (this.expressProgress + 10);
      }  
    },200);
    
  }
}
