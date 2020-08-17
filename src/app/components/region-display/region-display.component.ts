import { Component, Input, OnInit } from '@angular/core';
import { RegionserviceService } from '../../services/regionservice.service';

@Component({
  selector: 'app-region-display',
  templateUrl: './region-display.component.html',
  styleUrls: ['./region-display.component.css'],
})
export class RegionDisplayComponent implements OnInit {
  @Input() region: any;
  constructor(private regionService: RegionserviceService) {}

  ngOnInit(): void {}
}
