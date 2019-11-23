import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public hello = 'Leandro';
  public hellos = ['Hello', 'World', 'Estácio']
  public novoHellos;

  constructor() {

    console.log('KOEEEE')

    this.novoHellos = this.hellos.map(value => {
      return value.toUpperCase();
    })

  }

}
