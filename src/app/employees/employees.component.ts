import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Employee } from '../_interface/employee';
import { EmployeeService } from '../_service/employee.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = [
    'id',
    'employee_name',
    'employee_age',
    'employee_salary',
    'createdAt',
    'updatedAt',
    'action'
  ];
  dataSource: MatTableDataSource<Employee>;
  EmployeeList: Employee[];

  constructor(private service: EmployeeService) {}
  ngOnInit(): void {
    this.GetData();
  }


  GetData() {
    this.service.GetAll().subscribe((data: any) => {
      this.EmployeeList = data.allEmployees;
      const employees = Array.from(
        { length: this.EmployeeList.length },
        (v, i) => this.EmployeeList[i]
      );

      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(employees);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
