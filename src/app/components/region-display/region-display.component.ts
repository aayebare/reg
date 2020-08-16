import { Component, Input, OnInit } from '@angular/core';
import { RegionserviceService } from '../../services/regionservice.service';

@Component({
  selector: 'app-region-display',
  templateUrl: './region-display.component.html',
  // styleUrls: ['./region-details.component.css']
  // template: `
  // <div>
  //   <h1>Uganda Regions</h1>
  //   <hr>
  //   <div class="row">
  //     <div class="col-md-5" *ngFor="let region of regions" >
  //    <app-region-thumbnail [region]="region" #thumbnail (click)="handleThumbnailClick(region.name)"></app-region-thumbnail>
  //     </div>
  //   </div>
  // </div>`,

  styleUrls: ['./region-display.component.css']
})
export class RegionDisplayComponent implements OnInit {

  @Input() region: any;
  viewRegionDetails: boolean = false;

  constructor( private regionService: RegionserviceService) { }

  ngOnInit(): void {
  //   this.regionService.getRegions().subscribe((result:any) => {
  //     this.regions = result
  //     console.log(this.regions, '===')
  //   },
  //   err => alert(err)

  // )
  }

  // getRegions =() => {
  //   this.regionService.getRegions().subscribe((result:any) => {
  //     this.regions = result
  //     console.log(this.regions, '===')
  //   },
  //   err => alert(err)

  // )

  // }
  toggleRegionDetails=(index)=>{
    console.log(index, '====')

    this.viewRegionDetails = !this.viewRegionDetails
   
  }


}
