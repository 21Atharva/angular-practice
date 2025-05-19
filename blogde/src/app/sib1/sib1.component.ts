import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-sib1',
  templateUrl: './sib1.component.html',
  styleUrls: ['./sib1.component.css']
})
export class Sib1Component implements OnInit {

  constructor(private ss: SharedServiceService) { }

  ngOnInit(): void {
  }

  sendta(){
    this.ss.sendData("yuhfcye efbfefc");
  }

  


}
