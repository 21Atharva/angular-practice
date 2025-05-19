import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  InputName ='Hello Atharva';

  ngOnInit(): void {
  }

  getData(data:any){
    console.log(data);
  }

}
