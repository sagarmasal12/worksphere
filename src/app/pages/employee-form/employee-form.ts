import { Component, inject, OnInit } from '@angular/core';
import { EmpService } from '../../service/emp-service';

@Component({
  selector: 'app-employee-form',
  imports: [],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm implements OnInit{

  employeeSrv = inject(EmpService);

  ngOnInit(): void {
    
  }
}
