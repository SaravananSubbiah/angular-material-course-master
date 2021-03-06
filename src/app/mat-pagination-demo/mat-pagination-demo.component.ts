import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {MatDemoService} from './../services/mat-demo.service';
import {PageEvent, MatPaginator} from '@angular/material';
import { ChangeDetectorRef } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, merge} from 'rxjs';
import { map } from 'rxjs/operators';

export class Database { // {{{
  /** Stream that emits whenever the data has been modified. If filter is applied on the data*/
  dataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  get data(): any[] { return this.dataChange.value; }

  constructor(data) {
    // Fill up the database .
    this.dataChange.next(data);
  }
  getChange(data){
    this.dataChange.next(data);
  }
}

@Component({
  selector: 'app-mat-pagination-demo',
  templateUrl: './mat-pagination-demo.component.html',
  styleUrls: ['./mat-pagination-demo.component.css']
})
export class MatPaginationDemoComponent implements OnInit {
  subscriber: any[];
  lessons : any[];
  length = 0;
    pageIndex = 0;
    pageSize = 5;
  database: Database;
    pageEvent: PageEvent;
  dataSource : MyDataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private demoService: MatDemoService, private cdRef: ChangeDetectorRef) {  }

  ngOnInit() {
    this.demoService.getElements().subscribe(data=>{
      console.log(data);
      this.subscriber= data;
      console.log(this.subscriber);
      // this.database=new Database(this.subscriber);
      // this.dataSource = new MyDataSource(this.database, this.paginator);
      // this.cdRef.detectChanges();
    });

    this.demoService.getLessons(
      '1',
      '',
      'asc',
      '0',
      '5'
    )
    .subscribe(data => {
      console.log(data);
      this.lessons = data;
      this.length = this.lessons.length;
      this.database = new Database(this.lessons);
      this.dataSource = new MyDataSource(this.database, this.paginator);
      this.cdRef.detectChanges();
    });
    // this.demoService.getLessons(
    //   '1',
    //   '',
    //   'asc',
    //   '1',
    //   '5'
    // )
    // .subscribe(data => {
    //   console.log('Lessons: ', data);
    // });
  }

}

export class MyDataSource extends DataSource<any> {
  /** Stream of data that is provided to the table. */
  constructor(private dataBase: Database,  private paginator: MatPaginator) {
      super();
    console.log('In constructor', paginator.pageIndex);
    console.log(dataBase);

  }
   /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<any[]> {
    //return Observable.of(this.dataBase);
    const displayDataChanges = [
      //Observable.of(this.dataBase),
      this.dataBase.dataChange,
      this.paginator.page
    ];

    return merge(displayDataChanges).pipe(map(() => {
      let data;
      this.dataBase.dataChange.subscribe(xdata=>{
        // console.log(data.data);
        //console.log(Object.values(xdata));
        data=Object.values(xdata);
      }
      );

      // const data = this.dataBase.data;//.slice();
      console.log('In merge');
      //console.log(data);
      // // Grab the page's slice of data.
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      const finalData = data.splice(startIndex, this.paginator.pageSize);

      // console.log(finalData, 'finalData')
      return finalData;

    }));
  }

  disconnect() {}

}
