import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent {
  providers: any[] = [];
  providerId: any = "";
  newProvider: any = {
  };
  constructor(private router: Router,private http: HttpClient) {}

  ngOnInit(): void {
    this.getProviders();

  }

  seleccionarProveedor(providerId: number): void {
    this.router.navigate(['/representante-legal', providerId]);
  }

  getProviders(): void {
    this.http.get<any[]>('http://localhost:4000/providers').subscribe(
      {
        next: data => {
          this.providers = data;
          console.log(this.providers);
          
        },
        error: error => {
          console.error(error);
        }
      }
    );
  }

  createProvider(): void {
    this.http.post('http://localhost:4000/providers', this.newProvider)
    .subscribe(
      {
        next:  (data:any) => {
          console.log('Contac creado exitosamente');
          this.newProvider = {
          }; 
          console.log(this.newProvider); 
          this.getProviders();
          this.router.navigate(['legal-representative/',data.id])
      },
        error: error => {
          console.error('Error al crear el contact', error);
        }
      },
      
    );
  }
}
