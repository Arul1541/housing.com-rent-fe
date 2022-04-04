import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {UserService} from '../../services/user.service'

export interface Search {
  name: string;
}
@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})

export class TopnavComponent implements OnInit {
  slidevalue: number | undefined
  obj: any;
  dataarray:any;
  sharedArray: any;

  constructor(private service: UserService) {}
  showFiller=false
  ngOnInit(): void {
    const store = localStorage.getItem('value');
    
    if (store) {
      const token = JSON.parse(store);
      // const mail = JSON.parse(email);
      this.service.getdata(token).subscribe({
        next: (data) =>{
          console.log(data)
          this.dataarray=data.data[0].data
          this.sharedArray = this.dataarray
          console.log(this.dataarray)
         
        } ,
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      })
    }
  }
  


 

  
  
  
  // dummy data for filtration

  // dataarray1=[{"id":1,"list":"Agent","furnish":"Fully Furnished","property":"Apartment","city":"Bozeman","street":"4 Declaration Alley","img":"https://is1-2.housingcdn.com/01c16c28/d28d12030081059900ec107871df9e53/v0/medium/1_bhk_apartment-for-rent-btm_layout-Bangalore-others.jpg.webp","bhk":"3BHK","state":"Montana","phonenumber":"406-899-0559","lat":12.958126,"long":77.573023},
  // {"id":2,"list":"Agent","furnish":"Semi Furnished","property":"Independent","city":"Billings","street":"162 Onsgard Point","img":"https://is1-2.housingcdn.com/01c16c28/91918837e8170ba4d07c6390644818da/v0/medium/1_bhk_apartment-for-rent-bommanahalli-Bangalore-others.jpg.webp","bhk":"2BHK","state":"Montana","phonenumber":"406-729-6924","lat":12.952940,"long": 77.574397},
  // {"id":3,"list":"Owner","furnish":"UnFurnished","property":"HouseIndependent","city":"Missoula","street":"86354 Larry Center","img":"https://is1-3.housingcdn.com/01c16c28/7bd6db19d11504f71188ae11c74ebdb1/v0/medium/3_bhk_villa-for-rent-hormavu-Bangalore-kitchen.jpg.webp","bhk":"2BHK","state":"Montana","phonenumber":"406-120-3220","lat":12.985727,"long":77.561857},
  // {"id":4,"list":"Agent","furnish":"Fully Furnished","property":"Floor","city":"Billings","street":"195 Di Loreto Plaza","img":"https://is1-3.housingcdn.com/01c16c28/8f0496855fd776a3c9dd0ab011d07cc8/v0/medium/3_bhk_apartment-for-rent-rmv_extension_stage_2-Bangalore-others.jpg.webp","bhk":"3BHK","state":"Montana","phonenumber":"406-668-8794","lat":12.972583,"long":77.576396},
  // {"id":5,"list":"Owner","furnish":"Semi Furnished","property":"Studio","city":"Helena","street":"18 Summit Circle","img":"https://is1-3.housingcdn.com/01c16c28/44c7008266b44796c8b1df3bc77f55fa/v0/medium/3_bhk_apartment-for-rent-rmv_extension_stage_2-Bangalore-others.jpg.webp","bhk":"1BHK","state":"Montana","phonenumber":"406-621-4357","lat":12.983623, "long":77.612828},
  // {"id":6,"list":"Agent","furnish":"Fully Furnished","property":"HouseIndependent","city":"Billings","street":"83 Sundown Trail","img":"https://is1-2.housingcdn.com/01c16c28/3d19cb3e30757e7fa6ac3f321849ada9/v0/medium/1_bhk_apartment-for-rent-sadduguntepalya-Bangalore-bathroom.jpg.webp","bhk":"1BHK","state":"Montana","phonenumber":"406-967-3800","lat":12.968903, "long":77.625883},
  // {"id":7,"list":"Owner","furnish":"Semi Furnished","property":"Floor","city":"Bozeman","street":"55 Dayton Plaza","img":"https://is1-3.housingcdn.com/01c16c28/5cba3b6daf2c85850f26f05fb81d1a92/v0/medium/3_bhk_villa-for-rent-hennur-Bangalore-others.jpg.webp","bhk":"5BHK","state":"Montana","phonenumber":"406-550-2352","lat":12.981951,"long": 77.589123},
  // {"id":8,"list":"Agent","furnish":"Fully Furnished","property":"Apartment","city":"Helena","street":"2311 Little Fleur Way","img":"https://is1-3.housingcdn.com/01c16c28/06902dd310dc11d15dfefe954d62ff45/v0/medium/5_bhk_independent_house-for-rent-hsr_layout_bangalore-Bangalore-hall.jpg.webp","bhk":"2BHK","state":"Montana","phonenumber":"406-763-2936","lat":12.942806,"long": 77.599773,},
  // {"id":9,"list":"Owner","furnish":"Fully Furnished","property":"HouseIndependent","city":"Bozeman","street":"52975 Golden Leaf Hill","img":"https://is1-3.housingcdn.com/01c16c28/e8cbaec89dd7858e30116196e07788ea/v0/medium/3_bhk_independent_builder_floor-for-rent-hsr_layout_bangalore-Bangalore-hall.jpg.webp","bhk":"5BHK","state":"Montana","phonenumber":"406-602-4483","lat":12.963884,"long": 77.620042},
  // {"id":10,"list":"Agent","furnish":"Semi Furnished","property":"Studio","city":"Billings","street":"64462 Dennis Point","img":"https://is1-2.housingcdn.com/01c16c28/53237aefa84ef35690f56a1a5ea42f15/v0/medium/3_bhk_apartment-for-rent-jakkur-Bangalore-kitchen.jpg.webp","bhk":"4BHK","state":"Montana","phonenumber":"406-872-5022","lat": 12.963884,"long": 77.571258},
  // {"id":11,"list":"Owner","furnish":"Fully Furnished","property":"HouseIndependent","city":"Helena","street":"70 Pine View Street","img":"https://is1-3.housingcdn.com/01c16c28/b3ed09e57faec3067fe7d8f63e3220bc/v0/medium/1_bhk_apartment-for-rent-btm_layout-Bangalore-hall.jpg.webp","bhk":"4BHK","state":"Montana","phonenumber":"406-930-0596","lat":13.005033, "long":77.598398},
  // {"id":12,"list":"Owner","furnish":"Semi Furnished","property":"Floor","city":"Missoula","street":"54497 Pearson Court","img":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJMSURBVBgZpcFLiI1hGMDx//ed78yZ4RzTzGHcRpEZUpqajbsmaYpcdpRYYGEhbGwUG2VhMwslScnCwoZSChE2khW5LliImDFk3M4333nf93mfB6VsFDW/X2JmTETKBKVMUHb04kfjL0SVEBQnQghQiFE4wQWh8EYelKIQMn5a2tvGH4aoEaMhakg0ghhBlRCMIEqIihflzO1RMn77Ni5EBVFDouKjEUQJYnhRnER8MJwoPiid1YyiIaT8pGYM9tVwIbKhv8bW5R3sWNnJzoE6KxdWackStq2YSmtLwu41XTRcZNxFtAikToQgSiVLcEGplFNO3/xAksDQlRG662UWzKwwu7OFyS0pc6dVyJuRIiiaC1nuhKYolXLC9tV1sjQhd4KZ0XARVVjaW8WAZlAazci4j7iQYnkkaxSG80rhlRNXRzmwfjrjTcWAvBmJZjx5XfBm5DqjI9c4cvYLk0OTsU8DqOsn+1p4mr4NM8idYAYNJ5hB7iKqxrmb5+mZ84DBgSV0d/Zy59ll7j+9QH36C5K1x57bpv4O3o45fFCcKC4YXhQnihelXQ+yZeM6KKVsXrSfoVt7KJFy4dI10m/fhcJHaq0lapNKtLeV6KiWqFdLTKtmdE0p86UxSjmpsnnRfn45uPYM87v6SNJANlYETl59hwVDnWJesKCYi+AVi0rP4s88G77Ho+G7HBo8x/Ebu2gtVTAtk5gZ/7Js36xj3fPaD6/oW0XvjH5evn/Ivcd3efvq61BiZvyPZftmHQf2AjXgO3Dq/snhQz8A9uxhvZij7OIAAAAASUVORK5CYII=","bhk":"1BHK","state":"Montana","phonenumber":"406-292-7768","lat":12.991318, "long":77.623821},
  // {"id":13,"list":"Agent","furnish":"UnFurnished","property":"HouseIndependent","city":"Missoula","street":"692 Pine View Parkway","img":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALzSURBVDjLdZPdT5JhGMaZf4Bbh3ZaBzn/gU46MM1iNrf8WExNVyz1IDUOHCFpfq4PmmZmtTTT8GMJNGAO0hgi8a0oIBAGfoS4N12gmUpmL1fPy9LGpu/27N2zPdfvvu7rfh4WANZRa2pqims2mycMBsME+bjHnUvYOJ3O1JmZmWQiTiLi9dXVVYRCIUil0nWVSpWkVCqTZTJZ6pEAIu4mYtpms1EmkylFr9dTi4uLWFhYABFSCoUihYCo4eFhWiwWdycAHA6HMBAIIBwOw+/3g4i3tVptzOv1wu12Qy6Xx4h4mzgDRVFQq9UQiUTCQwCpWkd6jTEQRjA/Px8HHQCYvcvlAgOwWCwQCAQxHo9Xl9CC0WhsZQ5PT0/DarVifHwcPT096O/vZxyBtAXbx6fwDXLgV7TC8ToLzq60EhYh2kn1FZ1OF/H5fLDb7dBoNGhqajLx+fzM+vr6zPb2dtPMxCNQWj42XaPAz1VsuKTQiy7/ZhExvba2FrfLVCZBYnBwEC0tLZkH7qzS7Kbv7nvYW1GC0omwO/cef5YNxEUZWGTGdDAYjPfI2GQckMTR2dkZB4TUpy9F3Hdj9K4Buwu3ELZV4rOYC9ebMvAqSmkWGYmdWFzp6+uLzM7OxiFMDr29vabJoSu1kTkB6KgZO4FSRINF2PLWwtOVQd/m5n/Ly8uzH4ZIxtRKgsTk5CSYv17+GNQU/5+4BNGvhfjhFmL++UW01XB6E+6BRCKpGxoaink8nrjYMNoB71gN6F09oktc/ApewyZx8oWI7Z/GUFVVFSsvL/8/xoGBASGTPHPz3rbx4FHVwql+gpC1ADtLRQg77sDZcSEmE7+IZ9XQ0IDc3Fxhwj1obGzsrq6upkceZgBby/C9yoe29iSML9n4cO8sLRGcT+dwOFROTg7NZrO7j3xMBJDafDNtf8/8DHvWDlhb0zFScQqV13MjhYWFScXFxckEkHrsa2RWwbkT0fulZ/Y1D9j0u+asjRtXsy3E7rHP+S+qJels2qSd5wAAAABJRU5ErkJggg==","bhk":"4BHK","state":"Montana","phonenumber":"406-783-8774","lat":12.963550,"long": 77.554080},
  // {"id":14,"list":"Owner","furnish":"Semi Furnished","property":"HouseIndependent","city":"Missoula","street":"93901 Talisman Terrace","img":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJVSURBVDjLpZNLSJRhFIafGf/QTJ008zKKIWTgQkdByMxW5SJQgmjVToKCcNNlIQTRosCNu3IhgbsWCSG6ELwUlJi1KS3FCymUDCWh43VG5zvntPgnaxMIfXA23+J9H973nICZ8T/PG3l0+p8KqoaqIWo4UUQUJ4pzihP/zwMoqalERcAMMwMLYoAJmBmmijpFRVA1UDCCTL6f9AVUHLHlH8TXNg7knB3KoTBc9IfAxIivbTB84R1m+O721wD3w7fIOlwGKD0PujleUICIEgTQVAqjO12M7jxhNzCHKLjUJAXerkbQ+BSmezhRLJVB0Gf2sWuPLrEb6OXl9g2SGsMJJB04B1O7TQyunGFj6wsiiiqIWoogJeDEUZcdQUR4nbhEknlfRGBuq4S+2HVuLz7dJ1A1PFVDnfiBaZLpjSmaS/KJbifYTmtmdbOGXL3Ct5WzbCWKUJdGtZrfyt8CTpRI/k+qjhUTzjhJdUhRq+Zr9jzKM8p2n5OIecR3Enw8dYJEfB0P8EQNdYaIUphejpribA81xVCKM8qIzqyTuRXkXGMdpXkVvJruY+LzG7xMxXOiqBgZR7JIdA5g4ov5nfs7sFhRzuWWFiQoRIqbGJnppb6qgd6FfjwRBQsQys0nJycPVb/Syqt32V4eBJShF8McCmRxsfIaAHfOdzPwqQsJ9PsEi7Oz+7v923myvdUnUCMWckxHx5mMjtHe1EPHUCsZaemkGQQOco31beGHpeWhew3VjVQU1bLw/QPjU2MsL613Bg56zvVt4Q7gJpANbAJdE4+j7b8A7WGuGfrlZ+8AAAAASUVORK5CYII=","bhk":"4BHK","state":"Montana","phonenumber":"406-373-6204","lat":12.916371, "long":77.603895},
  // {"id":15,"list":"Owner","furnish":"UnFurnished","property":"Apartment","city":"Helena","street":"3 Sullivan Park","img":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJpSURBVDjLfVLPTxNREP52C+mvbSKE2FYkkIiJioo9KMT0QKImnAwHPXjk1IPoxUsPaoiaSDw0MTEe/Cs4mWhVLGCDlWgwFCMJiYeCSGstu9ttt/vLeS9dLBCc5MvMezvzzcz3VnAcB8ys2xMOTp2GmU7DMU04lgXbMGA3ffvoKJw37xF8+0pAi7W5QWuR01Jos3vXNwzstX8EhslJbF3nyZyI+WbcdgCBuENAHx0qRm8vLEZCYN6q1yH098PWapTT+M8EDeNBvV6/X752HWpIQt3jgcFGVxT4Sr8RnplFiHIOJFi7d7fgaJra2d0t+ehs2zZcgYkYnz0eVbs8Urixh0BgSSsrK0OmaU6Hw+GIQh1rtRonYBBFEV6vlyOTyWzquj6WSCQ+7tKARk12dXVFZFmGpmmw6AUYGAFbQ1VVfh+LxSI0TXKfiJQUZ5OwziZTvdmdwSWrVqsIBoOgCeL7Vshms1ZPT49YLBZ5EVo0cM/5nzl8L36BrFWgaNtKRS0/efl46REXsUHP4ya3ejdeWs+iJH7DSPwCjnYex0x+OrSwPPdweOLIIb4CjVXe+aWbu7vjM//pxzucOzEIS7QwGL0CSzAwfOYiS7/pEsyz/ZnSbtdWlORfaBckXD15ize5c+kFjh0+y0Kf2HznqcXFxU2fz4dAILBLA0EQIKsV5DeymEqP829Tr8extvWVl3omJycxMDCwnsvl5NXV1fPRaFTq6OiAJElcdb/fj4r8h3SYRV+4DyWtgO3qFj4szUGu6E8Fd3dmqVRqiNZJkqhxQicTl564TJhfRlrRBXWM0kIEhfB84dlG8i8v6tBqmkd4owAAAABJRU5ErkJggg==","bhk":"1BHK","state":"Montana","phonenumber":"406-870-0947","lat":2.949497, "long":77.573319},
  // ];  
  

  place="Bengaluru"
  title = 'google-places-autocomplete';
  userAddress: string = ''
  userLatitude: string = ''
  userLongitude: string = ''
  
  slidervalue(slidevalue: number | undefined){
    this.slidevalue=slidevalue;
    console.log(this.slidevalue);
  }
  formatLabel(slidevalue: number) {
    if (slidevalue >= 1000) {
      return Math.round(slidevalue / 1000) + 'k';
    }

    return slidevalue;
  }

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  search: Search[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our search
    if (value) {
      this.search.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(search: Search): void {
    const index = this.search.indexOf(search);

    if (index >= 0) {
      this.search.splice(index, 1);
    }
  }
  // Filter options in second nav

  bhk = new FormControl();
  bhk_type:any;
  bhkList: string[] = ['1Rk', '1BHK', '2BKH', '3BHK', '3+BHK'];
  bhkChangeAction(bhk_type: any){
    console.log(bhk_type)
    this.filterbhk(bhk_type)
  }
  list = new FormControl();
  list_type:any;
  listedList: string[] = ['Agent','Owner'];
  listChangeAction(list_type: any){
    console.log(list_type)
    this.filterlist(list_type)
  }
  furnish = new FormControl();
  furnish_type:any;
  furishList: string[] = ['Fully Furnished','Semi Furnished','UnFurnished'];
  furnishChangeAction(furnish_type: any){
    console.log(furnish_type)
    this.filterfurnish(furnish_type)
  }

  property = new FormControl();
  property_type:any;
  propertyList: string[] = ['Apartment','Independent', 'HouseIndependent', 'Floor','Studio','Duplex','Penthouse','Villa'];
  propertyChangeAction(property_type: any){
    console.log(property_type)
    this.filterproperty(property_type)
  }

  
  filterbhk(value: any) {
    let filterarray = []
    for (let i=0;i<value.length;i++) {
      let temp = this.dataarray.filter((data:any) => data.bhk == value[i])
      filterarray.push(...temp)
      this.sharedArray = filterarray
    }
        console.log((filterarray))
  }

  filterlist(value: any) {
    let filterarray = []
    for (let i=0;i<value.length;i++) {
      let temp = this.dataarray.filter((data:any)  => data.list == value[i])
      filterarray.push(...temp)
      this.sharedArray = filterarray
    }
    console.log((filterarray))
  }
  filterfurnish(value: any) {
    let filterarray = []
    for (let i=0;i<value.length;i++) {
      let temp = this.dataarray.filter((data:any) => data.furnish == value[i])
      filterarray.push(...temp)
      this.sharedArray = filterarray
    }
    
    console.log((filterarray))
  }

  filterproperty(value: any) {
    let filterarray = []
    for (let i=0;i<value.length;i++) {
      let temp = this.dataarray.filter((data:any)  => data.property == value[i])
      filterarray.push(...temp)
      this.sharedArray = filterarray
    }
    console.log((filterarray))
  }

  


}
