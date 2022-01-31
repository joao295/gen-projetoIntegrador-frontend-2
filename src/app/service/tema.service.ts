import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient /* acessa os métodos HTTP */) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }


  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://gen-ti.herokuapp.com/tema', this.token)
  }

  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`https://gen-ti.herokuapp.com/tema/${id}`, this.token)
  }

  getByNomeTema(nome: string): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://gen-ti.herokuapp.com/tema/${nome}', this.token)
  }

  

}