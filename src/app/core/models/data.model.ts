import { ComboboxItem } from '@app/core/models/combobox-item.model';
import { Figure } from '@app/core/models/figures.model';

export interface ApiData {
  figures: Figure[];
  calculations: ComboboxItem[];
}
