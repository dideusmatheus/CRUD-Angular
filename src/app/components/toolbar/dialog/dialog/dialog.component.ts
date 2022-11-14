import { Component, OnInit } from '@angular/core';
import { InterfaceCategory } from 'src/app/interfaces/interface-fruits-category/interface-category';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {

  categorys: InterfaceCategory[] = [];

  constructor() { }

  ngOnInit(): void {
    this.buildSelectCaterogy();
  }

  buildSelectCaterogy() {
    this.categorys = [
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


}
