import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-sib2',
  templateUrl: './sib2.component.html',
  styleUrls: ['./sib2.component.css']
})
export class Sib2Component implements OnInit {

  constructor(private ss: SharedServiceService) { }
 abc = 'asdfg';
  mesg: String= '';
  sub!:Subscription;
  ngOnInit(): void {
    this.sub = this.ss.datamsg.subscribe((data) =>{
      this.mesg =data;
    })

  }


}
