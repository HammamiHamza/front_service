// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environement } from '../environements/environement';
import { env } from 'process';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(environement.apiUrl+'/allBooks');
  }

  getBookById(id : number) : Observable<any>{
    return this.http.get(environement.apiUrl + `/${id}`, )
  }

  updateBook(id : number, bookRequest : any){
    return this.http.put(environement.apiUrl+`/update/${id}`, bookRequest)
  }

  createBook(bookRequest : any){
    return this.http.post(environement.apiUrl, bookRequest)
  }


  deleteBook(bookId : number){
    return this.http.delete(environement.apiUrl+`/delete/${bookId}`)
  }



  
}