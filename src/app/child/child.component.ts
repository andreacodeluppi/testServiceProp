import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
    console.log('shared service child', this.sharedService.Prop);
  }

}
