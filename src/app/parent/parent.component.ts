import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers:[SharedService]
})
export class ParentComponent implements OnInit {

  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.Prop = 25;
    console.log('AFTER INIT: ' + this.sharedService.Prop);
  }

}
