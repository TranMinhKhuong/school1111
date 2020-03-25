import { Component, OnInit } from '@angular/core';
import { SchoolService } from "../school.service";
import { School } from "../School";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-school-manager',
  templateUrl: './school-manager.component.html',
  styleUrls: ['./school-manager.component.css']
})
export class SchoolManagerComponent implements OnInit {

  selected : School;
  schools: School[];

  constructor(
    private schoolService: SchoolService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getSchools();
  }

  getSchools() {
    this.route.params.subscribe(param => {
      this.schoolService.getSchools().subscribe(data => {
        this.schools = data;
      });
    });
  }

  removeSchools() {
    this.schoolService.removeSchool(this.schools).subscribe(data => {
      this.router.navigateByUrl("/school-list");
    });
  }
}