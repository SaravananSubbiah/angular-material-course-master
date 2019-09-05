import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable()
export class MatDemoService {
  // dataList = new Subject<any[]>();

  constructor(private http: HttpClient) {}

      getElements() : Observable<any> {
        return this.http.get('assets/elements.json');
          // }));
      }

      getLessons(
        courseId: string,
        filter: string,
        sortOrder: string,
        pageNumber: string,
        pageSize: string
      ): Observable<any> {
        console.log('server call');
        return this.http.get('/api/lessons', {
          params: new HttpParams()
              .set('courseId', courseId.toString())
              .set('filter', filter)
              .set('sortOrder', sortOrder)
              .set('pageNumber', pageNumber.toString())
              .set('pageSize', pageSize.toString())
      })
      .pipe(
          map(res =>  res['payload'])
      );
      }

}
