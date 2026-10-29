import { Pipe, PipeTransform } from '@angular/core';
import { TextService } from '../_services/text.service';

@Pipe({
  name: 'text',
  pure: false,
  standalone: true,
})
export class TextPipe implements PipeTransform {
  constructor(private textService: TextService) {}

  transform(key: string): string {
    return this.textService.get(key);
  }
}
