import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  
  constructor(private http:HttpClient){}

  apiUrl:string = "http://localhost:4208"

  getAllEmp(){
    return this.http.get(this.apiUrl+"/getall")
  }

  addEmp(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/addEmp`,data);
  }

  deleteEmp(empId:number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/deleteEmp/${empId}`)
  }
  
}
