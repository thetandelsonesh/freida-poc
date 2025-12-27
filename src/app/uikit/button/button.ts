import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  @Input() variant: 'primary' | 'secondary' | 'text' | 'link' = 'primary';
  @Input() disabled: boolean = false;
  @Input() showIcon: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
}
