import { OnInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-type',
  templateUrl: './icon-type.component.html',
  styleUrls: ['./icon-type.component.css']
})
export class IconTypeComponent{
  @Input() type:string="";
}
