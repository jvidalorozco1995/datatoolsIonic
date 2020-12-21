import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConductoresPage } from './conductores.page';

describe('ConductoresPage', () => {
  let component: ConductoresPage;
  let fixture: ComponentFixture<ConductoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConductoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConductoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
