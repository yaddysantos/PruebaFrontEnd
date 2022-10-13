import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    component = new AppComponent();
  });

  it('Componente Principal creado', ()=>{
    let myVar: string = component.title;
    expect(myVar).toEqual('front-iris');
  })

});
