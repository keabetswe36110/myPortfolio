import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { ApiService } from 'src/app/services/api.service';
import emailjs from '@emailjs/browser';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  myMessage={
    from_name: "",
    from_email: "",
    message:'',
    name:'',
    subject: ''
  }



  constructor(private api: ApiService,private snackbar:MatSnackBar){
  }
  map:any;
  title = 'google-maps' 
  ngOnInit(): void {
    const loader = new Loader({
      apiKey: "AIzaSyDjzLHvt9AtvlNw_fN5_NhZs3FKBDwCBAI",
      version: "weekly",
    });
    
    loader.load().then(async () => {
      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      this.map = new Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -26.021818, lng: 27.930758 },
        zoom: 16,
      });
    });
  }

  async sendMessage(){
    emailjs.init('Pkg7EvqD1YUR-FdrN')
    let response = await emailjs.send("service_phmfjni","template_iz0tr54",{
    from_name: this.myMessage.from_name,
    to_name: "",
    from_email: this.myMessage.from_email,
    subject: this.myMessage.subject,
    message: this.myMessage.message,
    reply_to: "",
    });
    this.snackbar.open("message sent successfully",'OK' ,{duration:1000})
  }


}
