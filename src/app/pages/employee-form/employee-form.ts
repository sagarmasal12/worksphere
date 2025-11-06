import { Component, inject, OnInit } from '@angular/core';
import { EmpService } from '../../service/emp-service';
import { EmailValidator, FormBuilder, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './employee-form.html',
  styleUrls: ['./employee-form.css'],
})
export class EmployeeForm implements OnInit{

  employees :any[]=[];
  empForm!:FormGroup;

  constructor(private empService:EmpService, private fb:FormBuilder){

  }


  ngOnInit(): void {
    this.GetAllEmpl();
    this.empForm =this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      salary:['',Validators.required],
      department:['',Validators.required]
    })
  }

  GetAllEmpl(){
    this.empService.getAllEmp().subscribe({
      next:(res:any)=>{
        console.log('Api Responce',res);
        this.employees= res.data.recordset
        console.log(this.employees);
        
      },
      error:(err)=>{
        console.error("Api Error",err);
      }
     
    })
  }

  
}
