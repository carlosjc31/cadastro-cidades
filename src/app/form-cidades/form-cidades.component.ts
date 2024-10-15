import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { cidadesService } from '../cidade.service';

@Component({
  selector: 'app-form-cidades',
  templateUrl: './form-cidades.component.html',
  styleUrl: './form-cidades.component.css'
})
export class FormCidadesComponent implements OnInit {
  formGroup: FormGroup;
  isEditing: boolean = false;

  constructor(private router: Router,
              private activeRoute: ActivatedRoute,
              private service: cidadesService,
              private formBuilder: FormBuilder) {

    this.formGroup = this.formBuilder.group({
      id:        [''],
      nome:      [''],
      estado:    [''],
      sigla:     [''],
      populacao: [''],
      regiao:    ['']
    });
  }

  ngOnInit(): void {
    const id = (this.activeRoute.snapshot.paramMap.get('id'));
    if (id != 0) {
      this.isEditing = true;
      this.loadcidades(id);

}
  }

  loadcidades(id: number) {
    this.service.getcidadesById(id).subscribe({
      next: data => this.formGroup.setValue(data)
    });
  }
  update() {
    this.service.update(this.formGroup.value).subscribe({
      next: () => this.router.navigate(['cidades'])
    });
  }
  save() {
    this.service.save(this.formGroup.value).subscribe({
      next: () => this.router.navigate(['cidades'])
    });
  }
}
