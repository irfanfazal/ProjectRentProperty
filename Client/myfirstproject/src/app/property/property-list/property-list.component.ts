import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.Interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  sellRent=1;
  properties:Array<IProperty>;
/**
 *
 */
constructor(private route :ActivatedRoute, private housingservice:HousingService)
{


}

  ngOnInit(): void
  {
    if(this.route.snapshot.url.toString())
    {
      this.sellRent=2;
    }
    this.housingservice.getAllProperties(this.sellRent).subscribe(
      data=>{
        this.properties=data;
      },
      error=>
      {
        console.log(error);
      }

    )
  }
}
