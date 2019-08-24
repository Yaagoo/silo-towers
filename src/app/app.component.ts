import { Component, OnInit } from '@angular/core';
import { Tower } from './tower.model';
import { DataService } from './data.service';
import { timer } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  towers$: Tower[];
  constructor(private dataSercice: DataService){   
  }
  
  ngOnInit(){
    timer(0, 5000)
  .subscribe(() => this.dataSercice.getTowers()
    .subscribe(data => this.towers$=data));
   
  }

  greenrec=391.5;
}