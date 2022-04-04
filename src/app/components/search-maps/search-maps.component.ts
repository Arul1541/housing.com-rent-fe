import { Component, OnInit } from '@angular/core';
import { TopnavComponent } from '../topnav/topnav.component';
@Component({
  selector: 'app-search-maps',
  templateUrl: './search-maps.component.html',
  styleUrls: ['./search-maps.component.css']
})
export class SearchMapsComponent implements OnInit {
  obj: any;

  constructor() { }

  ngOnInit(): void {
    const store = localStorage.getItem('value');
    if (store) {
      this.obj = JSON.parse(store);
      const token=this.obj.user;
      console.log(token);
      
      // if (token){
      //   alert("User verified login successful")
      // }
      // this.serv.getUser(this.obj.email);
      
    }
  }
  isReadMore = true

  showText() {
     this.isReadMore = !this.isReadMore
  }

  cards = [
    {
      title: 'Card Title 1',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://is1-2.housingcdn.com/01c16c28/d28d12030081059900ec107871df9e53/v0/medium/1_bhk_apartment-for-rent-btm_layout-Bangalore-others.jpg.webp'
    },
    {
      title: 'Card Title 2',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 3',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 4',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },

  ];





  // FILTERATION OF DATA'S FROM THE dropdowns



//   let query = []
// Object.entries(filters).forEach(([key, value]) => {
//     if(key==="cost")
//         query.push(`(${value[0][0]}<=h.srp_info?.minRate && h.srp_info?.minRate<=${value[0][1]})`)
//     if(key==="rating")
//         query.push(`((h.reviews || [])[0]?.rate==${value})`)
//     if(key==="facilities")
//         query.push(`(${JSON.stringify(value)}.every(val => (h.facilities || []).includes(val)))`)
//     if(key==="propertytypes")
//         query.push(`(${JSON.stringify(value)}.includes(h.propertyType))`)
//     if(key==="stars")
//         query.push(`(${JSON.stringify(value)}.includes(h.starRating))`)
// })
// query = query.join(" && ")

// // Filter totalData with Query
// totalData.filter(h => eval(query))

  

}
