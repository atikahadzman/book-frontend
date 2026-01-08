import { Component, Input } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-greeting',
  imports: [
    MaterialModule, 
    MatBadgeModule
  ],
  templateUrl: './greeting.component.html',
})
export class GreetingComponent {
    // userName = 'John';
    @Input() userName = 'Mina';
    @Input() subtitle = 'Check your reports';

}
