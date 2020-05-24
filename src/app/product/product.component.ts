import { Component, OnInit, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Product } from '../product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() produto:Product;
  date:any
  serializedDate:any

  constructor(private dataService: DataService) { }
  startDate = new Date(1990, 0, 1);
  ngOnInit(): void {
    this.date = new FormControl(this.produto.releaseDate);
    this.serializedDate = new FormControl((this.produto.releaseDate).toString());
  }


  atualizar(){
    
    this.dataService.atualizar(this.produto).subscribe(()=>{
  
      window.location.reload();
    }) 
  }
  deletar(){
    this.dataService.deletar(this.produto.productId).subscribe(()=>{
  
      window.location.reload();
    }) 
  }



}

