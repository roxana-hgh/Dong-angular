import { Component, Input } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    standalone: false
})
export class HeaderComponent {

  constructor(){}
  showFiller = false;
  @Input() drawer!: MatDrawer;

}
