import { Component, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GraphicPage } from './../../pages/graphic/graphic.page';
import { TurbineDataModel } from '../../models/turbine-data.model';
import { TurbineDataService } from '../../providers/turbine-data-service/turbine-data-service';

@Component({
  selector: 'turbine-data',
  templateUrl: 'turbine-data.component.html'
})
export class TurbineDataComponent implements OnDestroy {

  turbine_datas: [{
    id: number,
    image_src: string;
    title: string,
    subtitle: number,
    unity: string
  }];
  updateData: any;
  clickMessage = 'Teste';

  constructor(
    private navCtrl: NavController,
    private turbineDataService: TurbineDataService
  ) {
    this.turbineDataService.getLastTurbineData()
      .subscribe((res: TurbineDataModel) => {
        this.turbine_datas =
          [
            {
              id: 0,
              image_src: 'assets/img/wind.png',
              title: 'Velocidade do Vento',
              subtitle: res.wind_speed,
              unity: ' m/s'
            },
            {
              id: 1,
              image_src: 'assets/img/volt.png',
              title: 'Tensão',
              subtitle: res.electric_voltage,
              unity: ' V'
            },
            {
              id: 2,
              image_src: 'assets/img/tension.png',
              title: 'Corrente',
              subtitle: res.electric_current,
              unity: ' A'
            },
            {
              id: 3,
              image_src: 'assets/img/mppt.png',
              title: 'Máxima Potência',
              subtitle: res.mppt,
              unity: ' W'
            },
          ]
      });

    this.updateData = this.setUpdateData();
  }
  ngOnDestroy(): void {
    if (this.updateData) {
      clearInterval(this.updateData);
    }
  }

  pushPage(item_turbine:{}, position:number): void {
    this.navCtrl.push(GraphicPage, item_turbine)
  }
  setUpdateData() {
    setInterval(() => {
      this.turbineDataService.getLastTurbineData()
        .subscribe((res: TurbineDataModel) => {
          this.turbine_datas[0].subtitle = res.wind_speed;
          this.turbine_datas[1].subtitle = res.electric_voltage;
          this.turbine_datas[2].subtitle = res.electric_current;
          this.turbine_datas[3].subtitle = res.mppt;
        });
    }, 2000);
  }
}
