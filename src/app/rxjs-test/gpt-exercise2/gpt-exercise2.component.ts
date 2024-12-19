import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { filter, forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-gpt-exercise2',
  imports: [],
  templateUrl: './gpt-exercise2.component.html',
  styleUrl: './gpt-exercise2.component.sass'
})
export class GptExercise2Component {

  constructor (private dataServ: DataService) {}

  ngOnInit(): void {
    const output = forkJoin ([this.dataServ.getCars (), this.dataServ.getBrandsDictionary ()]).pipe (
      map (([castArray, brandsDictionary]) => 
      this.mapCarBrandIdsToNames (castArray, brandsDictionary))
    ).subscribe (res => {
      console.log (res)
    }
    )

  }

  mapCarBrandIdsToNames (cars: {id: number, brandId: number, color: string, brandName?: string}[], brandsDictionary: any) {
    return cars.map (car => {
      car.brandName = brandsDictionary[car.brandId].name;
      return car;
    })
  }
}
