import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  public cards = [
    {
      title: "6 sinais de que você é um namorado abusivo",
      subTitle: "Relacionamento",
      img: "../../assets/images/card_abusivo.jpeg",
      link: "https://papodehomem.com.br/6-sinais-de-que-voce-e-um-namorado-abusivo",
      content: "Não importa se você acredita que todo o controle que você exerce sobre ela é para protegê-la ou algo assim.",
      isNew: true,
    },
    {
      title: "6 sinais de que você é um namorado abusivo",
      subTitle: "Relacionamento",
      img: "../../assets/images/card_abusivo.jpeg",
      link: "https://papodehomem.com.br/6-sinais-de-que-voce-e-um-namorado-abusivo",
      content: "Não importa se você acredita que todo o controle que você exerce sobre ela é para protegê-la ou algo assim.",
      isNew: false,
    },
    {
      title: "Mengão perdeu",
      subTitle: "Relacionamento",
      img: "../../assets/images/card_broderagem.jpeg",
      link: "https://papodehomem.com.br/6-sinais-de-que-voce-e-um-namorado-abusivo",
      content: "Não importa se você acredita que todo o controle que você exerce sobre ela é para protegê-la ou algo assim.",
      isNew: false,
    },
  ];

  public arrayCards;

  constructor() {
    this.arrayCards = this.cards;
  }

  ngOnInit() {
  }

  clickCard = (card) => {
    console.log(card)
  }

  filterCards = (search) => {

    const searchTerm = search.srcElement.value;
    console.log(`Voce digitou: ${searchTerm}`)

    this.arrayCards = this.cards.filter((card) => {
      if (card.title.indexOf(searchTerm) > 0){
        return true;
      }
    })

    if (searchTerm.length == 0){
      this.arrayCards = this.cards;
    }
    // console.log(this.arrayCards)
    // return arrayCards;
  };
}
