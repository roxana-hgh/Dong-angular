import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SHARED_IMPORTS } from '../../shared/shared-imports';


@Component({
  selector: 'app-home',
  imports: [ButtonModule, SHARED_IMPORTS ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
