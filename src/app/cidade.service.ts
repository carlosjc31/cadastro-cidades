import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { cidade } from "./cidades";

@Injectable({
  providedIn: 'root'
})
export class cidadesService {
  save(value: any) {
    throw new Error('Method not implemented.');
  }
  update(value: any) {
    throw new Error('Method not implemented.');
  }

  url = 'http://localhost:3000/cidades';

  constructor(private http: HttpClient) { }

  getcidades(): Observable<cidade[]> {
    return this.http.get<cidade[]>(this.url);
  }
  getcidadesById(id: number): Observable<cidade> {
    return this.http.get<cidade>(`${this.url}/${id}`);
  }
  deletecidades(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${cidade.id}`);
  }
  updatecidades(cidade: cidade): Observable<cidade> {
    return this.http.put<cidade>(`${this.url}/${cidade.id}`, cidade);
  }
  savecidades(cidade: cidade): Observable<cidade> {
    return this.http.post<cidade>(this.url, cidade);
  }
}
