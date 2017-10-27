import { ElementTableModel } from './../../models/element-table.models';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Angular2Csv } from 'angular2-csv/Angular2-csv';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.scss']
})
export class HistoricComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  showTable = false;
  today: Date = new Date();
  minDate: Date = new Date(2000, 0, 1); // Setar no dia em que colocar em produção
  maxDate: Date = new Date(this.today.getUTCFullYear(), this.today.getUTCMonth(), this.today.getUTCDate());
  displayedColumns: Array<any> = ['date'];
  tableSize: number = data.length;
  dataSource: TurbineDataSourceComunicationAPI = new TurbineDataSourceComunicationAPI();

  frequency = [
    { value: 'horaemhora', viewValue: 'De hora em hora' },
    { value: 'diaemdia', viewValue: 'Diário' },
    { value: 'semanaemsemana', viewValue: 'Semanalmente' }
  ];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      vento: new FormControl(),
      electric_voltage: new FormControl(),
      corrente: new FormControl(),
      potencia: new FormControl()
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
  }

  // Alguém refatora
  firstFormButton() {
    // ['data', 'wind_speed', 'electric_voltage', 'corrente', 'potencia']
    if (this.firstFormGroup.value.vento === true && this.displayedColumns.indexOf('wind_speed') === -1) {
      this.displayedColumns.push('wind_speed');
    } else if (this.firstFormGroup.value.vento === false && this.displayedColumns.indexOf('wind_speed') >= 0) {
      const indexV = this.displayedColumns.indexOf('wind_speed');
      this.displayedColumns.splice(indexV, 1);
    }

    if (this.firstFormGroup.value.electric_voltage === true && this.displayedColumns.indexOf('electric_voltage') === -1) {
      this.displayedColumns.push('electric_voltage');
    } else if (this.firstFormGroup.value.electric_voltage === false && this.displayedColumns.indexOf('electric_voltage') >= 0) {
      const idx = this.displayedColumns.indexOf('electric_voltage');
      this.displayedColumns.splice(idx, 1);
    }

    if (this.firstFormGroup.value.corrente === true && this.displayedColumns.indexOf('corrente') === -1) {
      this.displayedColumns.push('corrente');
    } else if (this.firstFormGroup.value.corrente === false && this.displayedColumns.indexOf('corrente') >= 0) {
      const idx = this.displayedColumns.indexOf('corrente');
      this.displayedColumns.splice(idx, 1);
    }

    if (this.firstFormGroup.value.potencia === true && this.displayedColumns.indexOf('potencia') === -1) {
      this.displayedColumns.push('potencia');
    } else if (this.firstFormGroup.value.potencia === false && this.displayedColumns.indexOf('potencia') >= 0) {
      const idx = this.displayedColumns.indexOf('potencia');
      this.displayedColumns.splice(idx, 1);
    }

    // Colocar no lugar correto ao Final da Busca
    this.showTable = true;
  }

  download() {
    const data = [
      {
        position: 1,
        date: '13/12/12',
        wind_speed: 8.2,
        electric_voltage: 12,
        corrente: 11.22,
        potencia: 10.1
      }
    ];
    const header = this.displayedColumns;
    const options = {
      fieldSeparator: ';',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      headers: (header),
      title: 'teste'
    };
    new Angular2Csv(data, 'turbine_data', options);
  }
}

export class TurbineDataSourceComunicationAPI extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<ElementTableModel[]> {
    return Observable.of(data);
  }
  disconnect() { }
}

const data: ElementTableModel[] = [
  { date: '10/10/10', wind_speed: 1.0079, electric_voltage: 110.0, corrente: 5, potencia: 445 },
  { date: '13/10/10', wind_speed: 1.0079, electric_voltage: 220.0, corrente: 40, potencia: 1145 },
  { date: '11/10/10', wind_speed: 1.0079, electric_voltage: 220.0, corrente: 40, potencia: 1145 },
  { date: '14/10/10', wind_speed: 1.0079, electric_voltage: 220.0, corrente: 40, potencia: 1145 },
  { date: '14/10/10', wind_speed: 1.0079, electric_voltage: 220.0, corrente: 40, potencia: 1145 },
  { date: '15/10/10', wind_speed: 1.0079, electric_voltage: 220.0, corrente: 40, potencia: 1145 },
  { date: '15/10/10', wind_speed: 1.0079, electric_voltage: 220.0, corrente: 40, potencia: 1145 },
];
