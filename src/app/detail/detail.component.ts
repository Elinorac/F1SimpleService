import { Component, OnInit } from '@angular/core';
import { F1SimpleService } from '../f1-simple.service';
import { RaceSchedule } from '../race-schedule';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public races: RaceSchedule[] | undefined

  constructor(service: F1SimpleService) {
    service.getRaces().subscribe(response => this.races = response);
  }

  ngOnInit(): void {
  }

}
