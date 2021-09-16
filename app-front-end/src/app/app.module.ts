import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DrillHoleContainerComponent } from './drill-hole-container/drill-hole-container.component';
import { DrillHoleListComponent } from './drill-hole-list/drill-hole-list.component';
import { DrillHoleDetailComponent } from './drill-hole-detail/drill-hole-detail.component';
import { HttpClientModule} from '@angular/common/http';
import { DepthAccuracyPipe } from './pipes/depth-accuracy.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DrillHoleContainerComponent,
    DrillHoleListComponent,
    DrillHoleDetailComponent,
    DepthAccuracyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
