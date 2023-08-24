import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-information-banking',
  templateUrl: './information-banking.component.html',
  styleUrls: ['./information-banking.component.css'],
  
})
export class InformationBankingComponent {
  providerId: number = 1;
  informationbankings: any[] = [];

  newinformationBanking: any = {
  };
  constructor(private route: ActivatedRoute, private http: HttpClient,private router:Router) {}


  ngOnInit(): void {
    this.getInformationBankings();

    this.route.paramMap.subscribe(params => {
      this.providerId = Number(params.get('providerId'));
    });

    this.newinformationBanking.provider_id = this.providerId;
  }

  getInformationBankings(): void {
    this.http.get<any[]>('http://localhost:4000/information-banking').subscribe(
      {
        next: data => {
          this.informationbankings = data;
          console.log(this.informationbankings);
          
        },
        error: error => {
          console.error(error);
        }
      }
    );
  }


    createInformationBanking(): void {
      this.http.post('http://localhost:4000/information-banking', this.newinformationBanking)
      .subscribe(
        {
          next:  (data:any) => {
            console.log('Information Banking creado exitosamente');
            this.newinformationBanking = {
            }; 
            this.router.navigate(['documentation-requirement/',this.providerId])
        },
          error: error => {
            console.error('Error al crear el Information Bankings', error);
          }
        },
        
      );
    }

}
