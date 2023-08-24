import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class contactsComponent {
  providerId: number = 1;
  contactos: any[] = [];

  nuevoContacto: any = {
  };
  constructor(private route: ActivatedRoute, private http: HttpClient,private router:Router) {}


  ngOnInit(): void {
    this.obtenercontacto();

    this.route.paramMap.subscribe(params => {
      this.providerId = Number(params.get('providerId'));
    });

    this.nuevoContacto.provider_id = this.providerId;
  }

  obtenercontacto(): void {
    this.http.get<any[]>('http://localhost:4000/contacts').subscribe(
      {
        next: data => {
          this.contactos = data;
        },
        error: error => {
          console.error(error);
        }
      }
    );
  }


    crearContacto(): void {
      this.http.post('http://localhost:4000/contacts', this.nuevoContacto)
      .subscribe(
        {
          next:  (data:any) => {
            console.log('Contac creado exitosamente');
            this.nuevoContacto = {
            }; 
            this.router.navigate(['information-tributary/',data.provider_id])
        },
          error: error => {
            console.error('Error al crear el contact', error);
          }
        },
        
      );
    }

}