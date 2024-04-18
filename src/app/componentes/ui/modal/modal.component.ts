import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() show: boolean = false
  @Input() title: string = ''
  @Output() onCloseModal: EventEmitter<null> = new EventEmitter<null>()

  closeModal(): void {
    this.onCloseModal.emit()
  }
}
