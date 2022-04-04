import { Component, Input, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  @Input() filterArray: any

  constructor() { }

  ngOnInit(): void {
    this.initMap()
    
    this.markerfunction()
  }


  initMap(): void {
    console.log('initMap')
    const myLatLng = { lat:12.9716,lng:77.5946};
  
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 12,
        center: myLatLng,
      }
    );
      
    
    new google.maps.Marker({
      position: { lat:12.9716,lng:77.5946},
      map,
    });
    new google.maps.Marker({
      position: { lat:12.9076,lng:77.5946},
      map,
    });
  }
  markerfunction(){
    for (var i=0; i<this.filterArray; i++) {
      // console.log(this.filterArray[i])
      console.log('add')

    }
    console.log(this.filterArray)
  }
  
  

}
