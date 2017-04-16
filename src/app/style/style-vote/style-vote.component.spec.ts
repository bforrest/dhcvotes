/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StyleVoteComponent } from './style-vote.component';

describe('StyleVoteComponent', () => {
  let component: StyleVoteComponent;
  let fixture: ComponentFixture<StyleVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
