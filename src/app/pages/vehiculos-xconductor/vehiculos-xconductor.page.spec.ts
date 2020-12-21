import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VehiculosXConductorPage } from './vehiculos-xconductor.page';

describe('VehiculosXConductorPage', () => {
  let component: VehiculosXConductorPage;
  let fixture: ComponentFixture<VehiculosXConductorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculosXConductorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VehiculosXConductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
