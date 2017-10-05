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

  @Input() public height: string = '';
  @Input() public themeId: string = '';
  @Input() public url: string = '';
  @Input() public tabs: string = '';
  @Input() public title: string = '';

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
    const rawData = this.url.replace('https://codepen.io/', '');
    const slugHash = rawData.split('/pen/')[1];
    const user = rawData.split('/pen/')[0];
    element.setAttribute('data-slug-hash', slugHash);
    element.setAttribute('data-user', user);
    element.setAttribute('data-height', this.height);
    element.setAttribute('data-theme-id', this.themeId);
    element.setAttribute('data-default-tab', this.tabs);
    element.setAttribute('data-pen-title', this.title);
    element.setAttribute('data-embed-version', '2');
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
