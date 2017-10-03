import { Component, Input, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgCodepenService } from '../../services';

@Component({
  selector: 'ng-codepen',
  styleUrls: ['./ng-codepen.component.scss'],
  templateUrl: './ng-codepen.component.html',
})
/**
 * NgCodepenComponent
 */
export class NgCodepenComponent implements AfterViewInit, AfterViewChecked {

  @ViewChild('myElement') public myElement: ElementRef;

  private loadAPI: Promise<any>;

  private _url = 'https://production-assets.codepen.io/assets/embed/ei.js';

  constructor(private cdRef: ChangeDetectorRef) {}

  public ngAfterViewInit() {
    this.loadDOM(this.myElement);
    this.loadAPI = new Promise((resolve: any) => {
        this.loadScript();
    });
  }

  public ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  public loadDOM(el: ElementRef): void {
    const node = el.nativeElement;
    const element = document.createElement('p');
    element.setAttribute('data-height', '400');
    element.setAttribute('data-theme-id', 'dark');
    element.setAttribute('data-slug-hash', 'JrJmzL');
    element.setAttribute('data-default-tab', 'css,result');
    element.setAttribute('data-user', 'gabrielferreira');
    element.setAttribute('data-embed-version', '2');
    element.setAttribute('data-pen-title', 'Nubank Credit Card');
    element.setAttribute('class', 'codepen');
    node.appendChild(element);
  }

  public loadScript() {
    const node = document.createElement('script');
    node.src = this._url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
