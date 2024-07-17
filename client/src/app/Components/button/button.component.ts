import { Component, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text?: string;
  @Input() icon?: string;
  onClick = output<any>();

  emitEvent(event: Event) {
    this.onClick.emit(event);
  }
}
