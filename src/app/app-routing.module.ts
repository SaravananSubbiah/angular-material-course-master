import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {CourseComponent} from "./course/course.component";
import {CourseResolver} from "./services/course.resolver";

import { VirtualScrollDemoComponent } from './virtual-scroll-demo/virtual-scroll-demo.component';
import { MatPaginationDemoComponent } from './mat-pagination-demo/mat-pagination-demo.component';
import { DemoCardComponent } from './demo-card/demo-card.component';


const routes: Routes = [
    {
        path: "",
        component: HomeComponent

    },
    {
      path: "vscroll",
      component: VirtualScrollDemoComponent

  },
  {
    path: "paging",
    component: MatPaginationDemoComponent

},
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: 'courses/:id',
        component: CourseComponent,
        resolve: {
            course: CourseResolver
        }
    },
    {
        path: "**",
        redirectTo: '/'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
