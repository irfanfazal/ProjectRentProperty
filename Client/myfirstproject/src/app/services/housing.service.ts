import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { IProperty } from '../property/IProperty.Interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http:HttpClient) { }
getAllProperties(SellRent:Number):Observable<IProperty[]>
{
  return this.http.get('data/properties.json').pipe(
    map(data=>{
      const arrayProperties:Array<IProperty>=[];
      for(const id in data)
      {
        if(data[id].SellRent===SellRent)
        arrayProperties.push(data[id]);
      }
      return arrayProperties;
    }

    )
  )



}

}
