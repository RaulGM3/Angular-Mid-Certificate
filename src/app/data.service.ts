import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';


// class User {
//   id: number;
//   name: string;
//   constructor (id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }
// }

// class Preference {
//   userId: number;
//   name: string;
//   constructor (userId: number, name: string) {
//     this.userId = userId;
//     this.name = name;
//   }
// }

interface Brand {
  id: number;
  name: string;
}
type Brands = Brand[];

const brands: Brands = [
    { id: 1, name: "BMW" },
    { id: 2, name: "Audi" },
    { id: 3, name: "Mercedes" },
    { id: 4, name: "VW" },
    { id: 5, name: "Renault" }
  ];
  
  interface Car {
    id: number;
    brandId: number;
    color: string;
    brandName?: string;
  }
  type Cars = Car[]
  const cars: Cars = [
    { id: 1, brandId: 1, color: "Negro" },
    { id: 2, brandId: 1, color: "Rojo" },
    { id: 3, brandId: 2, color: "Negro" },
    { id: 4, brandId: 3, color: "Blanco" },
    { id: 5, brandId: 1, color: "Amarillo" },
    { id: 6, brandId: 5, color: "Plateado" },
    { id: 7, brandId: 4, color: "Azul" },
    { id: 8, brandId: 3, color: "Azul Oscuro" },
    { id: 9, brandId: 2, color: "Negro" }
  ];

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // users: Users = [
  //   new User(1, 'John'),
  //   new User(2, 'Jane'),
  //   new User(3, 'Jack'),
  //   new User(4, 'Jill'),
  // ];
  // preferences: Preference [] = [
  //   new Preference(1, 'Preference 1'),
  //   new Preference(1, 'Preference 2'),
  //   new Preference(2, 'Preference 3'),
  //   new Preference(3, 'Preference 4'),
  // ];

  constructor() { }

  // getUserPreferences () {
  //   return of(this.preferences).pipe(
  //     delay (2000),
  //     map (prefs => Object.fromEntries (prefs.map (p => [p.userId, p.name])))
  //   )
  // }

  getBrandsDictionary () {
    return of (brands).pipe (
      delay (2000),
      map (brands => Object.fromEntries (brands.map (brand => [brand.id, brand])))
    )
  }

  getCars () {
    return of (cars).pipe (delay(1400))
  }
}
