import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryNotificationsComponent } from './history-notifications.component';

describe('HistoryNotificationsComponent', () => {
  let component: HistoryNotificationsComponent;
  let fixture: ComponentFixture<HistoryNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryNotificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
