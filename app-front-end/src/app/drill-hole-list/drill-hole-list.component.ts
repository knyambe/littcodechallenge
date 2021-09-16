import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Drillhole } from '../models/drillhole.model';
import { SurveysService } from '../services/surveys.service';

@Component({
  selector: 'app-drill-hole-list',
  templateUrl: './drill-hole-list.component.html',
  styleUrls: ['./drill-hole-list.component.scss']
})
export class DrillHoleListComponent implements OnInit {

  holes:any;
  active_link:any;
  constructor(private resource:SurveysService) { }

  ngOnInit(): void {
    this.resource.getDrillHoles()
    .subscribe(data =>{
      this.holes = data;
    });

  }

  @Output()
  rowClick = new EventEmitter();
  
  onclick(id: number) {
    this.active_link = id;
    this.Emit(id);
  }

  private Emit(id:number){
    this.rowClick.next(id);
  }

}
