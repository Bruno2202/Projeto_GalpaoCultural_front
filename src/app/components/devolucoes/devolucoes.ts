import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmprestimoService } from '../../service/emprestimo-service';
import { VisualizarEmpDTO } from '../../model/VisualizarEmpDTO';

@Component({
  selector: 'app-devolucoes',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './devolucoes.html',
  styleUrls: ['./devolucoes.css']
})
export class Devolucoes {
  celular!: string;
  emprestimos: VisualizarEmpDTO[] = [];
  isLoading = false;
  erroMsg: string | null = null;
  buscaRealizada = false;

  constructor(private emprestimoService: EmprestimoService, private cdr: ChangeDetectorRef, private zone: NgZone) { }


  //MOSTRAR TODOS OS EMPRESTIMOS POR CELULAR
  async verEmprestimos() {
    if (!this.celular.trim()) {
      this.erroMsg = 'Digite um número de celular válido.';
      this.emprestimos = [];
      this.buscaRealizada = false;
      this.cdr.detectChanges();
      return;
    }
    this.erroMsg = null;
    this.isLoading = true;
    this.buscaRealizada = true;
    this.cdr.detectChanges();


    const dados = await this.emprestimoService.verEmprestimos(this.celular);

    this.zone.run(() => {
      this.emprestimos = dados;
      this.isLoading = false;
    });
  }

  async devolverLivro(id: number) {
    await this.emprestimoService.devolverLivro(id);
    alert('Livro devolvido com sucesso!');
    await this.verEmprestimos();
  }
}

