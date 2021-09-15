import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../_interface/employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl:string="http://www.appgrowthcompany.com:5069/api/v1/employee/";

  constructor(private httpclient:HttpClient) { }

  // List all the data in Employees Table
  GetAll()
  {
    return this.httpclient.get<Employee[]>(this.baseUrl+"getAll");
  }

  // List single Employee detail in seperate component
  GetById(id:number)
  {
    return this.httpclient.get<Employee>(this.baseUrl+"get/"+id);
  }
}
