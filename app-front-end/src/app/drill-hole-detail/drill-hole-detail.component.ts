import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { map, shareReplay } from "rxjs/operators";
import { Collarposition } from '../models/collarposition.model';
import { Depthreading } from '../models/depthreading.model';
import { SurveysService } from '../services/surveys.service';

@Component({
  selector: 'app-drill-hole-detail',
  templateUrl: './drill-hole-detail.component.html',
  styleUrls: ['./drill-hole-detail.component.scss']
})
export class DrillHoleDetailComponent implements OnInit {
  hole$ : Observable<Surveys> | undefined;
  selected_hole:any;
  readings:any;
  constructor(private route: ActivatedRoute, private resource:SurveysService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      let hole = this.selected_hole = params.id;
      this.hole$ = this.resource.getCollarPositions(+hole).pipe(shareReplay());
    });
  }

  onPageChange(page:any){
    this.hole$ = this.resource.getCollarPositions(this.selected_hole, page).pipe(shareReplay());
  }

  onToggleAccuracy(reading:Depthreading){
    this.resource.postDepthReadings(reading).subscribe(data=>{reading.accurate = !reading.accurate})
  }

  showDepthDetails(content: any, details:any) {
    this.readings = details;
    this.modalService.open(content).result.then((result) => {
      
    }, (reason) => {
      
    });
  }

}

//this should really be exported from a resources namespace
export class Surveys{
  public per_page: any;
  public current_page: any;
  public total: any;
  public data : Collarposition[] | undefined;
}