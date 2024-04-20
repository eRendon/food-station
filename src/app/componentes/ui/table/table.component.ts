import { Component, EventEmitter, Input, Output } from '@angular/core'
import { IProduct } from '../../../interfaces/IProduct'
import { Router } from '@angular/router'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() items: IProduct[] = []
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>()

  constructor (private router: Router) {}

  delete(id: number): void {
    this.onDelete.emit(id)
  }

  async edit (id: number): Promise<void> {
    await this.router.navigate(['/product', id]);
  }
}
