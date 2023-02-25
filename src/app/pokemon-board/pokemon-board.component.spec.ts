import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonBoardComponent } from './pokemon-board.component';

describe('PokemonBoardComponent', () => {
  let component: PokemonBoardComponent;
  let fixture: ComponentFixture<PokemonBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
