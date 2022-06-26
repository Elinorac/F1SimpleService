import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, race } from 'rxjs';
import { map } from 'rxjs/operators';
import { Driver } from './driver'
import { RaceSchedule } from './race-schedule';

interface IDriverData {MRData: {DriverTable: {Drivers: Driver[]; }; }; }
interface IRaceScheduleData {MRData: {RaceTable: {Races: RaceSchedule[]; }; }; }

@Injectable({
  providedIn: 'root'
})
export class F1SimpleService {

  constructor(private httpService: HttpClient) { }

  public getDrivers(): Observable<Driver[]> { 
    return this.httpService.get<IDriverData>('http://ergast.com/api/f1/2019/drivers.json')
    .pipe(map(drivers => {
      return drivers.MRData.DriverTable.Drivers.map(driver => {
        return {  driverId: driver.driverId,
                  permanentNumber: driver.permanentNumber,
                  code: driver.code,
                  givenName: driver.givenName,
                  familyName: driver.familyName,
                  dateOfBirth: driver.dateOfBirth,
                  nationality: driver.nationality } as Driver; }); })); 
        }
  
  public getRaces(): Observable<RaceSchedule[]> { 
    return this.httpService.get<IRaceScheduleData>('http://ergast.com/api/f1/2012.json')
    .pipe(map(races => {
      return races.MRData.RaceTable.Races.map(raceSchedule => {
        return {  raceName: raceSchedule.raceName,
                  season: raceSchedule.season,
                  round: raceSchedule. round,
                  circuitId: raceSchedule.circuitId,
                  circuitName: raceSchedule.circuitName,
                  country: raceSchedule.country,
                  date: raceSchedule.date,
                  time: raceSchedule.time  } as RaceSchedule; }); })); 
  }
}