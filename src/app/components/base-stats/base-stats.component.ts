import { Component, Input, OnInit } from '@angular/core';
import { Stat } from 'src/models/stat';

@Component({
  selector: 'app-base-stats',
  templateUrl: './base-stats.component.html',
  styleUrls: ['./base-stats.component.css']
})
export class BaseStatsComponent implements OnInit{

  @Input() stats!: Stat[];
  @Input() type!: string;
  total: number = 0;

  ngOnInit(): void {
    this.stats.forEach(stat => this.total+=stat.value);
  }
}
