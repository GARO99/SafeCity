import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '@UIUtils/custom-validators';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
  //standalone: true,
  // imports: [IonicModule, ExploreContainerComponent],
})
export class HistorialComponente {
  constructor() {}
}

