import {
    async,
    ComponentFixture,
    TestBed
  } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgCodepenModule } from '../../';
import { NgCodepenComponent } from './ng-codepen.component';
import { CustomSafePipe } from '../../pipes/safe-pipe.pipe';

describe('NgCodepenComponent Positive Test', () => {
  const fixture: ComponentFixture<NgCodepenComponent> = null;
  const component: NgCodepenComponent = null;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgCodepenComponent, CustomSafePipe]
    });
    this.fixture = TestBed.createComponent(NgCodepenComponent);
    this.component = this.fixture.componentInstance;
  });

  it('When loaded should work fine', () => {
    this.fixture.detectChanges();
    expect(true).toBeTruthy();
  });

});
