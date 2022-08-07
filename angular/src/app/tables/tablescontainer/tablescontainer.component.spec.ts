import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablescontainerComponent } from './tablescontainer.component';

describe('TablescontainerComponent', () => {
  let component: TablescontainerComponent;
  let fixture: ComponentFixture<TablescontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablescontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablescontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
