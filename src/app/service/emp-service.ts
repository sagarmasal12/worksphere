import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  
  constructor(private http:HttpClient){}

  apiUrl:string = "http://localhost:4208"

  getAllEmp(){
    return this.http.get(this.apiUrl+"/getAll")
  }
}
