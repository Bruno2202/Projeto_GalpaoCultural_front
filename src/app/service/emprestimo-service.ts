import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmprestimoDto } from '../model/emprestimoDto';
import { Observable } from 'rxjs';
import { VisualizarEmpDTO } from '../model/VisualizarEmpDTO';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {
   POST = "http://localhost:8080/emprestimos/registrar";
   GET = "http://localhost:8080/emprestimos/verEmprestimos";
   PUT = "http://localhost:8080/emprestimos/devolucao";
  //  POST = "https://projeto-galpaocultural-back.onrender.com/emprestimos/registrar";
  //  GET = "https://projeto-galpaocultural-back.onrender.com/emprestimos/verEmprestimos";
  //  PUT = "https://projeto-galpaocultural-back.onrender.com/emprestimos/devolucao";
   

  constructor(private http: HttpClient) {}

  async verEmprestimos(celular: string): Promise<VisualizarEmpDTO[]> {
    const url = `${this.GET}?celular=${celular}`;
    return await firstValueFrom(this.http.get<VisualizarEmpDTO[]>(url));
  }

  async emprestarLivro(emprestimo: EmprestimoDto): Promise<EmprestimoDto> {
    return await firstValueFrom(this.http.post<EmprestimoDto>(this.POST, emprestimo));
  }

  async devolverLivro(id: number): Promise<void>{
    const url = `${this.PUT}?id=${id}`;
    return await firstValueFrom(this.http.put<void>(url, {}));
  }
}
