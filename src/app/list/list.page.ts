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
      title: "6 sinais de que você é um namorado abusivo",
      subTitle: "Relacionamento",
      img: "../../assets/images/card_abusivo.jpeg",
      link: "https://papodehomem.com.br/6-sinais-de-que-voce-e-um-namorado-abusivo",
      content: "Não importa se você acredita que todo o controle que você exerce sobre ela é para protegê-la ou algo assim.",
      isNew: false,
    },
  ];

  constructor() {

  }

  ngOnInit() {
  }

  clickCard = (card) => {
    console.log(card)
  }

  filterCards = (search) => {
    const searchTerm = search.srcElement.value;
    console.log(searchTerm)
    const cardsFiltered = this.cards.filter((card) => {
      if (card.title.indexOf(searchTerm) > 0)
        return true;
    })

    console.log(cardsFiltered)
    return cardsFiltered;
  };
}
