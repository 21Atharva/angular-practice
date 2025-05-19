import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormsComponent } from '../forms/forms.component';

@Component({
  selector: 'app-dynamic-load',
  templateUrl: './dynamic-load.component.html',
  styleUrls: ['./dynamic-load.component.css']
})
export class DynamicLoadComponent implements OnInit {

  constructor(private cfr: ComponentFactoryResolver) { }
  @ViewChild('container')
  container!:ViewContainerRef;

  ngOnInit(): void {
  }

  loadComponent(value:string){
    let component:any ;
        this.container.clear(); 

    if(value == 'forms'){
      // component = FormsComponent
       const factory = this.cfr.resolveComponentFactory(FormsComponent);
    this.container.createComponent(factory);
    }
    // if(value == 'forms'){
    //   component = FormsComponent
    // }
      
  }
}
