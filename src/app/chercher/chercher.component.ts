import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chercher',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chercher.component.html',
  styleUrl: './chercher.component.css'
})
export class ChercherComponent {
  motCle: string = '';

  @Output() motCleEvent = new EventEmitter<string>();

  chercher(): void {
    this.motCleEvent.emit(this.motCle);
  }

  effacer(): void {
    this.motCle = '';
    this.motCleEvent.emit('');
  }
}
