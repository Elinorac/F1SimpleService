import { Component, OnInit } from '@angular/core';
import { F1SimpleService } from '../f1-simple.service';
import { RaceSchedule } from '../race-schedule';


@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

  public races: RaceSchedule[] | undefined

  constructor(service: F1SimpleService) {
    service.getRaces().subscribe(response => this.races = response);
  }

  ngOnInit(): void {
  }

}
