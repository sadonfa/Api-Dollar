import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-compliance-regulatory',
  templateUrl: './compliance-regulatory.component.html',
  styleUrls: ['./compliance-regulatory.component.css']
})
export class ComplianceRegulatoryComponent {
  providerId: number = 1;
  complianceRegulatory: any[] = [];

  nuevoCompliance: any = {
  };
  constructor(private route: ActivatedRoute, private http: HttpClient,private router: Router) {}


  ngOnInit(): void {
    this.obtenerComplianceRegulatory();

    this.route.paramMap.subscribe(params => {
      this.providerId = Number(params.get('providerId'));
    });

    this.nuevoCompliance.provider_id = this.providerId;
  }

  obtenerComplianceRegulatory(): void {
    this.http.get<any[]>('http://localhost:4000/compliance-regulatory').subscribe(
      {
        next: data => {
          this.complianceRegulatory = data;
        },
        error: error => {
          console.error(error);
        }
      }
    );
  }


    crearComplianceRegulatory(): void {
      this.http.post('http://localhost:4000/compliance-regulatory', this.nuevoCompliance)
      .subscribe(
        {
          next:  data => {
            console.log('Cumplimiento Normativo creado exitosamente');
            this.nuevoCompliance = {
            }; 
            this.router.navigate(['admin-director-shareholder/',this.providerId])

        },
          error: error => {
            console.error('Error al crear el Cumplimiento Normativo', error);
          }
        },
        
      );
    }

}
