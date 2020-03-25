import { Injectable } from '@angular/core';
import {data} from './Mockdata';
import {School} from './School';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class SchoolService {
  api = '';
  school = data;
  constructor(
    private http : HttpClient
  ) { }

  getSchools(): Observable<School[]>{
    return this.http.get<School[]>(this.api);
  }

  getSchool(id):Observable<School>{
    return this.http.get<School>(`${this.api}/${id}`);
  }

  removeSchool(school){
    return this.http.delete<School>(`${this.api}/${school.id}`, school);
  }

  addSchool(school){
    return this.http.post<School>(`${this.api}`, school);
  }

  updateSchool(school){
    return this.http.put<School>(`${this.api}/${school.id}`, school);
  }

}