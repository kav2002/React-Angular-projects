import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  img2:string
  img1:string
  img3:string
  img4:string
  img5:string
constructor(){
this.img2='../../../assets/2.jpg';
this.img1='../../../assets/s1';
this.img3='../../../assets/1.jpg';
this.img4='../../../assets/new.jpg';
this.img5='../../../assets/1.jpg';
}
}
