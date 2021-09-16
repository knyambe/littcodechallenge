import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Drillhole } from '../models/drillhole.model';
import { Depthreading } from '../models/depthreading.model';
import { Surveys } from '../drill-hole-detail/drill-hole-detail.component';

@Injectable({
  providedIn: 'root'
})
export class SurveysService {

  constructor(private http:HttpClient) { }

  getDrillHoles(): Observable<Drillhole[]> {
    return this.http.get<Drillhole[]>('/api/holes');
  }

  getCollarPositions(hole_id:number, forPage:number = 1): Observable<Surveys> {
    return this.http.get<Surveys>(`/api/positions/${hole_id}?page=${forPage}`);
  }

  postDepthReadings(reading:Depthreading): Observable<Depthreading> {
    return this.http.put<Depthreading>(`/api/reading/${reading.id}`, {reading: reading});
  }
}
