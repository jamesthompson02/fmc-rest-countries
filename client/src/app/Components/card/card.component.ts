import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NumberFormatterPipe } from '../../Pipes/number-formatter.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink, NumberFormatterPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() flag: string = '';
  @Input() name: string = '';
  @Input() capital: string = '';
  @Input() region: string = '';
  @Input() population: string = '';
  constructor() {}
}
