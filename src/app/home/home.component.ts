import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {Observable} from "rxjs";
import {CoursesService} from "../services/courses.service";
import {map} from "rxjs/operators";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    title: string;
    status: string;
    lastUpdate: string;
    RFIClosed: boolean;
    beginnerCourses$: Observable<Course[]>;

    advancedCourses$: Observable<Course[]>;

    constructor(private coursesService: CoursesService) {
      this.title = 'Overlay Heading';
      this.status = 'Pending Officer Feedback';
      this.lastUpdate = '11 Aug 2019 | 12.14pm';
      this.RFIClosed = true;
    }
    updateRFI() {
      this.RFIClosed = !this.RFIClosed;
    }
    ngOnInit() {

        const courses$ = this.coursesService.findAllCourses();

        this.beginnerCourses$ = courses$.pipe(
          map(courses => courses.filter(course => course.category === 'BEGINNER') )
        );

        this.advancedCourses$ = courses$.pipe(
            map(courses => courses.filter(course => course.category === 'ADVANCED') )
        );

    }

}
