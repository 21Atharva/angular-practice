import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, observable } from 'rxjs';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  employeeForm!:FormGroup
  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name:['',[Validators.required, Validators.minLength(5)]],
      age:['', [Validators.required, Validators.min(18)]]
    })
   
  }
  
  onSubmit(){
    if(this.employeeForm.valid){
      alert("Submitted!");
    }
  }
    values:number[]=[];
    obs = new Observable((data:any) =>{
    data.next(1);
    data.next(2);
  })

    getData(){
      this.obs.subscribe((data:any) =>{
         this.values.push(data);
      })
    }

 
   
}
