import { Component, inject, OnInit } from '@angular/core';
import { EmpService } from '../../service/emp-service';
import {
  EmailValidator,
  FormBuilder,
  FormGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './employee-form.html',
  styleUrls: ['./employee-form.css'],
})
export class EmployeeForm implements OnInit {
  employees: any[] = [];
  empForm!: FormGroup;
  editMode:boolean = false;



  constructor(private empService: EmpService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.GetAllEmpl();
    
    this.empForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      salary: ['', Validators.required],
      department: ['', Validators.required],
    });
  }

  GetAllEmpl() {
    this.empService.getAllEmp().subscribe({
      next: (res: any) => {
        console.log('Api Responce', res);
        this.employees = res.data.recordset;
        console.log(this.employees);
      },
      error: (err) => {
        console.error('Api Error', err);
      },
    });
  }

  onSubmit() {
    if (this.empForm.valid) {
      const formData = this.empForm.value;
      this.empService.addEmp(formData).subscribe({
        next: (res) => {
          console.log('EMployee added succesffully', res);
          this.empForm.reset();
          this.GetAllEmpl();
          
        },
        error: (err) => {
          console.error('Invalid msgerrror', err);
        },
      });
    }else{
      console.log("Form Invalid")
    }
  
  }

  onEdit(){
   
    this.editMode == true;
    this.empForm.patchValue({
      
    })
  }

  deleteEmployee(empId:number){
    debugger;
    console.log("This is process for deleteAPi",empId)
    this.empService.deleteEmp(empId).subscribe({
      next:(res:any)=>{
        alert(res.message);
        this.GetAllEmpl();
      },
      error:(err)=>{
        console.error("Delete Api Error:",err)
      }
    })
  }

 
}
