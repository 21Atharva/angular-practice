import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  postData(data:any){
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data);
  }
  updateData(id:number, data:any){
      return this.http.put(`https://jsonplaceholder.typicode.com/posts/${id}`, data);
  }
  delete(id:number){
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }


}
