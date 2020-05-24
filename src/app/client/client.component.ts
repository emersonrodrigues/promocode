import { Component, OnInit, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { DataService } from '../data.service';
import { Clients } from '../clients';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  @Input() cliente:Clients;
  date:any
  serializedDate:any

  constructor(private dataService: DataService) { }
  startDate = new Date(1990, 0, 1);
  ngOnInit(): void {
    // this.date = new FormControl(this.cliente.registerDate);
    // this.serializedDate = new FormControl((this.produto.releaseDate).toString());
  }


  atualizar(){
    
    this.dataService.atualizarClient(this.cliente).subscribe(()=>{
  
      window.location.reload();
    }) 
  }
  deletar(){
    this.dataService.deletarClient(this.cliente.clientId).subscribe(()=>{
  
      window.location.reload();
    }) 
  }



}

