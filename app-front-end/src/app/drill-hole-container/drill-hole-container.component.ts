import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-drill-hole-container',
  templateUrl: './drill-hole-container.component.html',
  styleUrls: ['./drill-hole-container.component.scss']
})
export class DrillHoleContainerComponent implements OnInit {

  showDetails$: Observable<boolean> | undefined;
  constructor(private route: ActivatedRoute, 
              private router: Router) {
    this.onShowDetails();
  }
  public onRowClick(id: any) {
    this.router.navigate(["surveys", id]);
  }
  
  private onShowDetails() {
    this.showDetails$ = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      switchMap(_ => {
        return this.route.firstChild ?
               this.route.firstChild.params : 
               of(false);
        }),
      map(params => !!params)
    );
  }

  ngOnInit(): void {
  }

}
