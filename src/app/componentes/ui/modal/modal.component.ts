import { Component, EventEmitter, Input, Output } from '@angular/core'
import { modalAnimations } from '../../../libs/animations/modaInOut'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [modalAnimations]
})
export class ModalComponent {
  @Input() show: boolean = false
  @Input() title: string = ''
  @Output() onCloseModal: EventEmitter<null> = new EventEmitter<null>()

  closeModal(): void {
    this.onCloseModal.emit()
  }
}
