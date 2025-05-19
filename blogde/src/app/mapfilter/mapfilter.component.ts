import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapfilter',
  templateUrl: './mapfilter.component.html',
  styleUrls: ['./mapfilter.component.css']
})
export class MapfilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 readonly numbers: number[] = [1, 2, 3, 4];

getDouble(){
    return this.numbers.map((num: number) => num * 2);

}
// [2, 4, 6, 8]

}
