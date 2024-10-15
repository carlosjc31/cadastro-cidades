import { Component } from '@angular/core';
import { cidade } from '../cidades';
import { cidadesService } from '../cidade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabela-cidades',
  templateUrl: './tabela-cidades.component.html',
  styleUrl: './tabela-cidades.component.css'
})
export class TabelaCidadesComponent implements OnInit {
  cidades: cidade[] = [];

  constructor(private service: cidadesService,
              private router: Router) { }

  ngOnInit(): void {
    this.loadcidades();
  }
  loadcidades() {
    this.service.getcidades().subscribe({
      next: data => this.cidades = data
    });
  }
  delete(cidade: cidade) {
    this.service.deletecidades(cidade).subscribe({
      next: () => this.loadcidades()
    })
  }

}
