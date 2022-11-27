import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InterfaceProduct } from 'src/app/interfaces/interface-fruits-category/interface-category';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from './../../../../services/api.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {

  categoryList: InterfaceProduct[] = [];
  freshnessList: InterfaceProduct[] = [];

  formProductData!: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.buildFormProductData();


    this.buildSelectCaterogyList();
    this.buildProductFreshnessList();
  }

  buildFormProductData() {
    this.formProductData = this.formBuilder.group({
      productName: ['', Validators.required],
      productCategory: ['', Validators.required],
      productDate: ['', Validators.required],
      productFreshness: ['', Validators.required],
      productPrice: ['', Validators.required],
      productComments: ['', Validators.required]
    })
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
        name: 'Eletronic',
        value: '2'
      },
      {
        name: 'Others',
        value: '3'
      },
    ];
  }

  buildProductFreshnessList() {
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

  addProduct() {
    const date = this.formProductData.value;
    if (this.formProductData.valid) {
      this.apiService.postProduct(date).subscribe({
        next: (response)=>{
          alert('Product add successfully');
          this.formProductData.reset();
          this.dialogRef.close('save');
        },
        error: (error)=> {
          alert('Erro shile adding the product');
        }
      })
      console.log(this.formProductData.value);
      return;
    }
    alert('Invalid form');


  }

}
