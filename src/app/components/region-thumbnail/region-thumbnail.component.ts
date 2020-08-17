import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegionserviceService } from '../../services/regionservice.service';

@Component({
  selector: 'app-region-thumbnail',
  templateUrl: './region-thumbnail.component.html',
  styleUrls: ['./region-thumbnail.component.css'],
})
export class RegionThumbnailComponent implements OnInit {
  regions: any;
  region: any;

  constructor(
    private regionService: RegionserviceService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.regionService.getRegions().subscribe(
      (result: any) => {
        this.regions = result;
        this.region = this.activatedRoute.snapshot.params['name'];
      },
      (err) => alert(err)
    );
  }
}
