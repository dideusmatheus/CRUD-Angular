import { Component, OnInit } from '@angular/core';
import { InterfaceProduct } from 'src/app/interfaces/interface-fruits-category/interface-category';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {

  categoryList: InterfaceProduct[] = [];
  freshnessList: InterfaceProduct[] = [];

  constructor() { }

  ngOnInit(): void {
    this.buildSelectCaterogyList();
    this.buildProductFreshnessList();
  }

  buildSelectCaterogyList() {
    this.categoryList = [
      {
        name: 'Fruits',
        value: '0'
      },
      {
        name: 'Vegetables',
        value: '1'
      },
      {
        name: 'Fruits',
        value: '2'
      },
      {
        name: 'Others',
        value: '3'
      },
    ];
  }

  buildProductFreshnessList(){
    this.freshnessList = [
      {
        name: 'Brand New',
        value: '0',
      },
      {
        name: 'Second Hand',
        value: '1',
      },
      {
        name: 'Refurbished',
        value: '2',
      },
    ]
  }



}
