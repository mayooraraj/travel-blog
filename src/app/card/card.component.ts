import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

 places=[
    {name:'Manali',description:'Manali Itinerary: Ultimate 7-Day Travel Guide',img:'https://static.saltinourhair.com/wp-content/uploads/2023/07/18113518/brac-croatia-1-756x1080.jpg'},
    {name:'Costa Rica',description:'Tortuguero National Park: 6 Best Things To Do',img:'https://static.saltinourhair.com/wp-content/uploads/2023/05/10112618/canggu-bali-48-721x1080.jpg'},
    {name:'Croatia',description:'22 Best Things to do in Croatia in 2023',img:'https://static.saltinourhair.com/wp-content/uploads/2022/02/12184053/tortuguero-23-600x600.jpg'},
  ];

}
