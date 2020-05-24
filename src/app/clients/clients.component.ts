import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';
import { MatTableDataSource } from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FormControl, Validators} from '@angular/forms';
import { Clients } from '../clients';
import { DataRowOutlet } from '@angular/cdk/table';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ClientsComponent implements OnInit {


  constructor(private dataService: DataService) { }

  clients:Clients[];
  displayedColumns: string[];
  dataSource:any;
  expandedElement: Clients | null;

  ncliente=false
  cliente:Clients;

  email = new FormControl('', [Validators.required, Validators.email]);
  ngOnInit(): void {
    
    this.dataService.getAllClients().subscribe((data: Clients[])=>{
     
      this.clients = data;
      this.displayedColumns = ['name', 'address', 'cnpj', 'email'];
      this.dataSource = new MatTableDataSource(this.clients);

    }) 

  }

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  novoClient(){
  
    this.ncliente = !this.ncliente;
    this. Limpar();
    
  }
  criar(){
    this.cliente.registerDate = new Date();
    this.dataService.criarClient(this.cliente).subscribe(()=>{
      this. Limpar();
      window.location.reload();
    }) 
  }
  Limpar(){
    

    this.cliente=  {
      "name": "",
      "address": "",
      "cnpj": "",
      "email": "",
      "mobile": "",
      "registerDate": new Date(),
      "clientId": 0
    }
  }
  cancelar(){
    this.Limpar()
    this.novoClient()
  }

  getAllClients(){
        this.dataService.getAllClients().subscribe((data: Clients[])=>{
      this.clients = data;

    })

  }

}
