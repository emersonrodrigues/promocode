import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';
import { MatTableDataSource } from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FormControl, Validators} from '@angular/forms';
import { Clients } from '../clients';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProductsComponent implements OnInit  {


  constructor(private dataService: DataService) { }

  products: Product[];
  clients:Clients[];
  displayedColumns: string[];
  dataSource:any;
  expandedElement: Product | null;

  nproduto=false
  produto:Product;

  email = new FormControl('', [Validators.required, Validators.email]);
  ngOnInit(): void {
    
    this.dataService.sendGetRequest().subscribe((data: Product[])=>{
     
      this.products = data;
      this.displayedColumns = ['description', 'discount', 'price'];
      this.dataSource = new MatTableDataSource(this.products);

    }) 

  }

  teste(item){
    console.log(item)
  }
  
  applyFilter(event: Event) {
    console.log(this.products)
    console.log(this.dataSource)
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  novoproduto(){
    this.getAllClients()
    this.nproduto = !this.nproduto;
    if(this.nproduto){
        this.getAllClients()
      }

    this. Limpar();
    
  }
  criar(){
    this.dataService.criar(this.produto).subscribe(()=>{
      this. Limpar();
      window.location.reload();
    }) 
  }
  Limpar(){
    

    this.produto= {
      "clientId": 0,
      "description": "",
      "discount": 0,
      "endDate": new Date(),
      "price": 0,
      "productId": 0,
      "releaseDate":new Date()
    }
  }
  cancelar(){
    this.Limpar()
    this.novoproduto()
  }

  getAllClients(){
        this.dataService.getAllClients().subscribe((data: Clients[])=>{
      this.clients = data;

    })

  }

}
