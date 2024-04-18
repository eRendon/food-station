import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string = ''
  @Output() onClick: EventEmitter<null> = new EventEmitter<null>()

  emmitEvent(): void {
    this.onClick.emit()
  }
}
