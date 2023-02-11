import { Component, Input, OnInit } from '@angular/core';
import { Stat } from 'src/models/stat';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css', './type.component.css']
})
export class StatComponent implements OnInit{

  @Input() stat!:Stat;
  @Input() total!:number;
  @Input() type!:string;
  porcentagem:number = 0;

  ngOnInit(): void {
    this.porcentagem = (this.stat.value * 100)/this.total;
  }
}
