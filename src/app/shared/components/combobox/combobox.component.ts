import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComboboxItem } from '../../../core/models';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.css'],
})
export class ComboboxComponent {
  @Input() title?: string;
  @Input() comboElements!: ComboboxItem[] | null;
  @Output() selectedComboItem = new EventEmitter<ComboboxItem>();

  elementSelected(
    source: { isUserInput: boolean },
    element: ComboboxItem
  ): void {
    source.isUserInput && this.selectedComboItem.emit(element);
  }
}
