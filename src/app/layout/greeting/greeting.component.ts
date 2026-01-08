import { Component, Input } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MaterialModule } from '../../material.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@Component({
    selector: 'app-greeting',
    imports: [
        MaterialModule, 
        MatBadgeModule,
        MatCardModule,
        MatIconModule
    ],
    templateUrl: './greeting.component.html',
    styleUrl: './greeting.component.css'
})
export class GreetingComponent {
    // userName = 'John';
    @Input() userName = 'Mina';
    @Input() subtitle = 'Check your reports';

}
