import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    private REST_API_SERVER = "http://ec2-54-164-134-114.compute-1.amazonaws.com:8080/product/";
    private REST_API_SERVER_CLIENTS = "http://ec2-54-164-134-114.compute-1.amazonaws.com:8080/client/";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }
  public deletar(idProduto){
    return this.httpClient.delete(this.REST_API_SERVER+idProduto);
  }
  public atualizar(produto){
    return this.httpClient.put(this.REST_API_SERVER+produto.productId,produto);
  }
  public criar(produto){
    return this.httpClient.post(this.REST_API_SERVER,produto);
  }

  public getAllClients(){
    return this.httpClient.get(this.REST_API_SERVER_CLIENTS);
  }

  public deletarClient(idClient){
    return this.httpClient.delete(this.REST_API_SERVER_CLIENTS+idClient);
  }
  public atualizarClient(client){
    return this.httpClient.put(this.REST_API_SERVER_CLIENTS+client.clientId,client);
  }
  public criarClient(client){
    return this.httpClient.post(this.REST_API_SERVER_CLIENTS,client);
  }

}