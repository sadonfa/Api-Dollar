import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-legal-representative',
  templateUrl: './legal-representative.component.html',
  styleUrls: ['./legal-representative.component.css']
})
export class RepresentanteLegalComponent {
  providerId: number = 1;
  representantesLegales: any[] = [];

  nuevoRepresentante: any = {
  };
  constructor(private route: ActivatedRoute, private http: HttpClient,private router: Router) {}


  ngOnInit(): void {
    this.obtenerRepresentantesLegales();

    this.route.paramMap.subscribe(params => {
      this.providerId = Number(params.get('providerId'));
    });

    this.nuevoRepresentante.provider_id = this.providerId;
  }

  obtenerRepresentantesLegales(): void {
    this.http.get<any[]>('http://localhost:4000/legal-representatives').subscribe(
      {
        next: data => {
          this.representantesLegales = data;
        },
        error: error => {
          console.error(error);
        }
      }
    );
  }


    crearRepresentanteLegal(): void {
      this.http.post('http://localhost:4000/legal-representatives', this.nuevoRepresentante)
      .subscribe(
        {
          next:  (data:any) => {
            console.log('Representante legal creado exitosamente');
            this.nuevoRepresentante = {
            }; 
            this.router.navigate(['contacts/',data.provider_id])
        },
          error: error => {
            console.error('Error al crear el representante legal', error);
          }
        },
        
      );
    }

}
