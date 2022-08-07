import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties:Array<any>=[{
      "id":1,
       "Name":"Irfan House",
       "Type":"House",
       "Rent":"15000"
  },
  {
       "id":2,
       "Name":"Eros House",
        "Type":"House",
        "Rent":"13000"
  },
  {
    "id":3,
    "Name":"Poet House",
    "Type":"House",
    "Rent":"55000"
  },
  {
    "id":4,
    "Name":"kango House",
    "Type":"House",
    "Rent":"55000"
  },
  {
    "id":5,
    "Name":"Turkey House",
    "Type":"House",
    "Rent":"55000"
  },
  {
    "id":6,
    "Name":"Sarena House",
    "Type":"House",
    "Rent":"6000"
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
