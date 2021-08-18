import { Component, OnInit } from '@angular/core';
import { TeaService } from 'src/app/service/tea.service';

@Component({
  selector: 'app-teas-main-contant',
  templateUrl: './teas-main-contant.component.html',
  styleUrls: ['./teas-main-contant.component.less'],
})
export class TeasMainContantComponent implements OnInit {
  categorys = [
    {
      id: 1,
      title: 'Black Tea',
      img: 'https://mloyvexztott.i.optimole.com/gsZ96cU.e2cJ~4b1ac/w:90/h:auto/q:90/https://www.universduthe.be/wp-content/uploads/2020/03/the%CC%81-noir.png',
    },
    {
      id: 2,
      title: 'Green Tea',
      img: 'https://mloyvexztott.i.optimole.com/gsZ96cU.e2cJ~4b1ac/w:90/h:auto/q:90/https://www.universduthe.be/wp-content/uploads/2020/03/the%CC%81-noir.png',
    },
    {
      id: 3,
      title: 'White tea',
      img: 'https://mloyvexztott.i.optimole.com/gsZ96cU.e2cJ~4b1ac/w:90/h:auto/q:90/https://www.universduthe.be/wp-content/uploads/2020/03/the%CC%81-noir.png',
    },
    {
      id: 4,
      title: 'Jasmin tea',
      img: 'https://mloyvexztott.i.optimole.com/gsZ96cU.e2cJ~4b1ac/w:90/h:auto/q:90/https://www.universduthe.be/wp-content/uploads/2020/03/the%CC%81-noir.png',
    },
    {
      id: 5,
      title: 'Smoked tea',
      img: 'https://mloyvexztott.i.optimole.com/gsZ96cU.e2cJ~4b1ac/w:90/h:auto/q:90/https://www.universduthe.be/wp-content/uploads/2020/03/the%CC%81-noir.png',
    },
    {
      id: 6,
      title: 'Rooibos tea',
      img: 'https://mloyvexztott.i.optimole.com/gsZ96cU.e2cJ~4b1ac/w:90/h:auto/q:90/https://www.universduthe.be/wp-content/uploads/2020/03/the%CC%81-noir.png',
    },
  ];
  // categorys = [];

  constructor(private teaService: TeaService) {}

  ngOnInit(): void {
    this.teaService.getBlackTeas().subscribe((data) => {
      let test = data;
      let tmp = test;
      console.log(test);
    });
  }
}
