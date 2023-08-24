import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-documentation-requirements',
  templateUrl: './documentation-requirements.component.html',
  styleUrls: ['./documentation-requirements.component.css']
})
export class DocumentationRequirementcomponent {
  providerId: number = 1;
  documentosrequeridos: any[] = [];

  nuevoDocumentoRequerido: any = {
  };
  constructor(private route: ActivatedRoute, private http: HttpClient, private router:Router) {}


  ngOnInit(): void {
    this.obtenerDocumentosRequeridos();

    this.route.paramMap.subscribe(params => {
      this.providerId = Number(params.get('providerId'));
    });

    this.nuevoDocumentoRequerido.provider_id = this.providerId;
  }

  obtenerDocumentosRequeridos(): void {
    this.http.get<any[]>('http://localhost:4000/documentation-requirements').subscribe(
      {
        next: data => {
          this.documentosrequeridos = data;
        },
        error: error => {
          console.error(error);
        }
      }
    );
  }


    crearDocumentoRequerido(): void {
      this.http.post('http://localhost:4000/documentation-requirements', this.nuevoDocumentoRequerido)
      .subscribe(
        {
          next:  data => {
            console.log('Agregar documentacion requerida exitosamente');
            this.nuevoDocumentoRequerido = {
            }; 
            this.router.navigate(['dataForm/',this.providerId])
        },
          error: error => {
            console.error('Error al agregar los documentos requeridos', error);
          }
        },
        
      );
    }

}