import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, observable, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categories } from '../models/categories';
// import { Categories } from './../models/categories';

 export const yearlyConsumption = {
  title: {
    text: '',
  },

  subtitle: {
    text: '',
  },

  yAxis: {
    title: {
      text: 'Number of Employees',
    },
  },

  xAxis: {
    accessibility: {
      rangeDescription: 'Range: 2010 to 2017',
    },
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
      pointStart: 2010,
    },
  },

  series: [
    {
      name: 'Installation',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
    },
    {
      name: 'Manufacturing',
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
    },
    {
      name: 'Sales & Distribution',
      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
    },
    {
      name: 'Project Development',
      data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
    },
    {
      name: 'Other',
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
          },
        },
      },
    ],
  },
};
const optionsConsumption = {
  title: {
    text: 'Consumption',
  },
  xAxis: {
    // categories: this.categoriess,
    categories: ['Laptops', 'Mobiles', 'Clothes', 'Shoes', 'Watches'],
  },
  labels: {
    items: [
      {
        html: 'total consumption',
        style: {
          left: '60px',
          top: '25px',
          // theme
          color:
            // "red"
            // Highcharts.defaultOptions.title.style &&
            // Highcharts.defaultOptions.title.style.color
            'black',
        },
      },
    ],
  },
  series: [
    {
      type: 'column',
      name: 'March',
      data: [3, 2, 1, 3, 4],
    },
    {
      type: 'column',
      name: 'April',
      data: [2, 3, 5, 7, 6],
    },
    {
      type: 'column',
      name: 'May',
      data: [4, 3, 3, 9, 1],
    },
    {
      type: 'spline',
      name: 'Average',
      data: [3, 2.67, 3, 6.33, 2.9],
      marker: {
        lineWidth: 2,
        lineColor: 'red',
        fillColor: 'white',
      },
    },
    {
      type: 'pie',
      name: 'Total consumption',
      data: [
        {
          name: 'May',
          y: 13,
          color: '#95CEFF', // Jane's color
        },
        {
          name: 'April',
          y: 23,
          color: '#5C5C61', // John's color
        },
        {
          name: 'March',
          y: 19,
          color: '#90ED7D', // Joe's color
          // color: Highcharts.getOptions().colors[2] // Joe's color
        },
      ],
      center: [100, 80],
      size: 100,
      showInLegend: false,
      dataLabels: {
        enabled: false,
      },
    },
  ],
};
@Injectable({
  providedIn: 'root',
})
export class DashboardOneService  {

  data!: [];
  categoriess!: string[] ;
  // empList: Array<Custom> = [];
  Categories : Categories[] =[]
  constructor(private httpClient: HttpClient) {


    }
  getAllCategories(): Observable<Categories[]> {
    return this.httpClient.get<Categories[]>(environment.APIURL + '/categories');
  }
  getMainCategories(): Observable<string[]> {
   return this.getAllCategories().pipe(map((categories)=>{
     return categories.map((category=>category.mainCat))
   }))
  //  .subscribe(products=>{ (products.map(product=>{return this.categoriess.push(product.mainCat) }))})
  }

getSettings(){
  return this.getMainCategories().pipe(map(mainCategories=>{
    // return {...optionsConsumption, xAxis: {...optionsConsumption.xAxis, categories: mainCategories}}
    return {optionsConsumption : {...optionsConsumption, xAxis: {...optionsConsumption.xAxis, categories: mainCategories}},
  yearlyConsumption : {...yearlyConsumption}}
  }))
}

}

