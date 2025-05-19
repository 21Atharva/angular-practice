import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }
  private message = new Subject<String>();
  datamsg = this.message.asObservable();

  sendData(data:any){
    this.message.next(data);
  }


 
  }

