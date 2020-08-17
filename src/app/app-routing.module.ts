import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionDisplayComponent } from './components/region-display/region-display.component';
import { RegionThumbnailComponent } from './components/region-thumbnail/region-thumbnail.component';
import { RegionListComponent } from './components/region-list/region-list.component';

const routes: Routes = [
  {
    path: '',
    component: RegionListComponent
  },
  {
    path: 'region/:name',
    component: RegionThumbnailComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
