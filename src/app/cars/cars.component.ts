import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

import {Car} from '../car';
import {Prospect} from '../prospect';
import {Color} from '../color';
import {Year} from '../year';
import {NewCarComponent} from '../new-car/new-car.component';

import {CarService} from '../car.service';
import {ProspectService} from '../prospect.service';
import {BasicCar} from '../basic-car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  newCarDialogRef: MatDialogRef<NewCarComponent>;

  cars: BasicCar[];
  prospects: Prospect[];
  colors = Color.colors;
  years = Year.years;

  selectedCar: Car;

  pipedriveToken: string;

  constructor(private dialog: MatDialog,
              private carService: CarService,
              private prospectService: ProspectService) {
  }

  ngOnInit() {
  }

  onSelect(car: BasicCar): void {
    this.carService.get(car.id).subscribe(c => this.selectedCar = c);
  }

  init(pipedriveToken: string) {
    this.pipedriveToken = pipedriveToken;
    this.carService.createCarRepository(pipedriveToken)
      .subscribe(() => {
        this.getCars();
        this.getProspects(pipedriveToken);
      });
  }

  applyToken(pipedriveToken: string) {
    this.init(pipedriveToken);
  }


  update(personId: number, model: string, year: number, color: string): void {
    const carToUpdate = {id: this.selectedCar.id, personId: personId, model: model, year: year, color: color};
    this.carService.update(carToUpdate as Car).subscribe(() => {
      this.selectedCar.personId = personId;
      this.selectedCar.model = model;
      this.selectedCar.year = year;
      this.selectedCar.color = color;
      const updatedCar = this.cars.find(car => car.id === carToUpdate.id);
      updatedCar.model = model;
    });
  }

  add(newCar: Car): void {

    this.carService.add(newCar).subscribe(id => {
      console.log(id);
      const car: BasicCar = {
        id: id.id,
        model: newCar.model
      };
      this.cars.push(car);
    });
  }

  delete(): void {
    this.carService.delete(this.selectedCar.id).subscribe(() => {
      this.cars = this.cars.filter(car => car.id !== this.selectedCar.id);
      this.selectedCar = undefined;
    });
  }

  getCars(): void {
    this.carService.getAll()
      .subscribe(cars => this.cars = cars);
  }

  getProspects(pipedriveToken: string): void {
    this.prospectService.getProspects(pipedriveToken)
      .subscribe(prospects => this.prospects = prospects);
  }

  openNewCarDialog() {
    this.newCarDialogRef = this.dialog.open(NewCarComponent,
      {
        data:
          {prospects: this.prospects}
      });
    this.newCarDialogRef.afterClosed().subscribe(newCar => {
      if (newCar) {
        this.add(newCar);
      }
    });
  }
}
