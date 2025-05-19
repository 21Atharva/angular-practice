import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-api-integration',
  templateUrl: './api-integration.component.html',
  styleUrls: ['./api-integration.component.css']
})
export class ApiIntegrationComponent implements OnInit {

  constructor(private ss:ApisService) { }

  ngOnInit(): void {
  }

  fetchData(){
    this.ss.getData().subscribe((data) =>{
      console.log(data);
    })
  }

  sendData(){
    const payload={
     title: 'Angular POST',
      body: 'This is a test POST request.',
      userId: 1
    }

    this.ss.postData(payload).subscribe((data)=>{
      console.log(data);
    })
  }

  updateData(){
    const id=1
     const payload={
      id:id,
     title: 'Angular POST',
      body: 'This is a test POST request.',
      userId: 1
    }
    this.ss.updateData(id, payload).subscribe((data)=>{
      console.log(data);
    })

  }


  deleteData(){
    const id =1;

    this.ss.delete(id).subscribe((data)=>{
      console.log("deleted....", data);
    })
  }
}
