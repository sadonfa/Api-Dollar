import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-information-tributary',
  templateUrl: './information-tributary.component.html',
  styleUrls: ['./information-tributary.component.css']
})
export class InformationTributaryComponent {
  formSend:boolean = false;
  providerId: number = 1;
  informationTributaries: any[] = [];
  selectedCountry: any ;
  countries = [
    { name: 'El Salvador' },
    { name: 'Guatemala' },
    { name: 'Panama' },
    { name: 'Peru' },
    { name: 'Colombia' },
    // Agregar más países y campos según sea necesario
  ];

  newInformationTributary: any = {
  };
  constructor(private route: ActivatedRoute, private http: HttpClient,private router: Router) {}


  ngOnInit(): void {
    this.getInformationTributaries();

    this.route.paramMap.subscribe(params => {
      this.providerId = Number(params.get('providerId'));
    });

    this.newInformationTributary.provider_id = this.providerId;
  }

  getInformationTributaries(): void {
    this.http.get<any[]>('http://localhost:4000/information-tributaries').subscribe(
      {
        next: data => {
          this.informationTributaries = data;
          console.log(this.informationTributaries);
          
        },
        error: error => {
          console.error(error);
        }
      }
    );
  }


    createInformationTributary(): void {
      this.http.post('http://localhost:4000/information-tributaries', this.newInformationTributary)
      .subscribe(
        {
          next:  data => {
            console.log('Information Tributary creado exitosamente');
            this.newInformationTributary = {
            }; 
            this.getInformationTributaries();
            this.formSend = true;
            this.router.navigate(['compliance-regulatory/',this.providerId])
        },
          error: error => {
            console.error('Error al crear el Information Tributary', error);
          }
        },
        
      );
    }

}
