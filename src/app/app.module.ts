import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegionDisplayComponent } from './components/region-display/region-display.component';
import { RegionserviceService } from './services/regionservice.service';
import { RegionThumbnailComponent } from './components/region-thumbnail/region-thumbnail.component';
import { RegionListComponent } from './components/region-list/region-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionDisplayComponent,
    RegionThumbnailComponent,
    RegionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [RegionserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
