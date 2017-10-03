import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

/**
 * NgCodepenService class.
 */
@Injectable()
export class NgCodepenService {
  public static getCodepenSrc(url: string, tabs: string, skin: string): string {
    return `${url}/embedded/${tabs}/${skin}/`;
  }
}
