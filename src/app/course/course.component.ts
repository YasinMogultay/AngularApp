import { Component, OnInit } from '@angular/core';
import {CoursesService} from "../courses.service";

@Component({
  selector: 'app-course',
  template: `<h2>{{title}}</h2>
  <ul>
    <li *ngFor="let course of courses">
      {{course}}
    </li>
  </ul>`
  // templateUrl: './course.component.html',
  // styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = "List of Courses";
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  ngOnInit(): void {
  }

}
