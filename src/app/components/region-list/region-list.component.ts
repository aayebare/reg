import { Component, OnInit } from '@angular/core';
import { RegionserviceService } from '../../services/regionservice.service';
@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.css']
})
export class RegionListComponent implements OnInit {
  regions: any;
  viewRegionDetails: boolean = false;

  constructor(private regionService: RegionserviceService) { }

  ngOnInit(): void {
    this.regionService.getRegions().subscribe((result:any) => {
      this.regions = result
      console.log(this.regions, '===')
    },
    err => alert(err)

  )
  }

}
