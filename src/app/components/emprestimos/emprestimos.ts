import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule, NgForm} from '@angular/forms';
import { EmprestimoService } from '../../service/emprestimo-service';
import { EmprestimoDto } from '../../model/emprestimoDto';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-emprestimos',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, NgxSpinnerModule],
  templateUrl: './emprestimos.html',
  styleUrl: './emprestimos.css'
})
export class Emprestimos {
  emprestimo: EmprestimoDto = new EmprestimoDto;

  constructor(private emprestimoService: EmprestimoService, private spinner: NgxSpinnerService) { }

 LimitadorNumeros(event: Event) {
    const input = event.target as HTMLInputElement;
    let valor = input.value.replace(/[^0-9]/g, '');
    if (valor.length > 11) {
      valor = valor.slice(0, 11);
    }
    input.value = valor;
    this.emprestimo.celular = valor;
  }

  async emprestarLivro(form: NgForm) {   
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.spinner.show();
    await this.emprestimoService.emprestarLivro(this.emprestimo)
    this.spinner.hide();
    form.resetForm(); 
  }
}


