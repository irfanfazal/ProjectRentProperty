import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyid:number;
  constructor(private router:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    this.propertyid=Number(this.router.snapshot.params['id']);
    this.router.params.subscribe(
      (params) =>{
        this.propertyid=+params['id'];

      }
        )
  }
  OnNextRecord()
  {
    this.propertyid=this.propertyid+1;
    this.route.navigate(['property-detail',this.propertyid])
  }

}
