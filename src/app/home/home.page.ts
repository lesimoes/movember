import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {

    this.consultaApi();

  }

  consultaApi(){
    fetch('http://www.json-generator.com/api/json/get/cfjBorXJua?indent=2')
    .then(response => response.json())  
    .then(data => {
      console.log(data)
    })
  }

}
