import { API_CONFIG } from './../config/api.config';
import { Produto } from './../model/produto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${API_CONFIG.baseUrl}/produtos`);
  }

  findById(produto: Produto): Observable<Produto> {
    return this.http.get<Produto>(`${API_CONFIG.baseUrl}/produto/${produto.id}`);
  }

  save(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${API_CONFIG.baseUrl}/produtos`, produto);
  }

  update(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${API_CONFIG.baseUrl}/produtos`, produto);
  }

  delete(produto: Produto): Observable<void> {
    return this.http.delete<void>(`${API_CONFIG.baseUrl}/produtos/${produto.id}`);
  }
}
