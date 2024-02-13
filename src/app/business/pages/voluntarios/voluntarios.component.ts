import { Component } from '@angular/core';
import { Aportante } from '../../interfaces/aportante';

@Component({
  selector: 'business-voluntarios',
  templateUrl: './voluntarios.component.html',
  styleUrl: './voluntarios.component.css'
})
export class VoluntariosComponent {
  public countries: Aportante[] = [];
  public isLoading: boolean = false;

  // constructor(private countriesService: CountriesService) { }

  searchAportantes(term: string): void {
    this.isLoading = true;
    // this.countriesService.searchCapital(term)
    //   .subscribe(countries => {
    //     this.countries = countries;
    //     this.isLoading = false;
    //   });
  }
}
