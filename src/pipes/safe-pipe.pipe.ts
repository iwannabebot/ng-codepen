import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({ name: 'customSafe' })
export class CustomSafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  public transform(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
