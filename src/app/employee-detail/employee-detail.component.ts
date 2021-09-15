import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../_interface/employee';
import { EmployeeService } from '../_service/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  id:number=0;
  EmployeeData:Employee;

  constructor(private route:ActivatedRoute,private service:EmployeeService) { }

  ngOnInit(): void {
   this.id=this.route.snapshot.params["id"];
   this.GetById();

  }

  GetById()
  {
    this.service.GetById(this.id).subscribe((rep:any)=>{this.EmployeeData=rep.data;
    });
  }

}
