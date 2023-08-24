import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-administrator-director-shareolder',
  templateUrl: './administrator-director-shareolder.component.html',
  styleUrls: ['./administrator-director-shareolder.component.css']
})
export class AdministratorDirectorShareolderComponent {
  providerId: number = 1;
  administratorDirectorShareolder: any[] = [];

  nuevoAdministrator: any = {
  };
  constructor(private route: ActivatedRoute, private http: HttpClient,private router:Router) {}


  ngOnInit(): void {
    this.obtenerAdministratorDirectorShareolders();

    this.route.paramMap.subscribe(params => {
      this.providerId = Number(params.get('providerId'));
    });

    this.nuevoAdministrator.provider_id = this.providerId;
  }

  obtenerAdministratorDirectorShareolders(): void {
    this.http.get<any[]>('http://localhost:4000/administrator-director-shareolders').subscribe(
      {
        next: data => {
          this.administratorDirectorShareolder = data;
        },
        error: error => {
          console.error(error);
        }
      }
    );
  }


    crearAdministratorDirectorShareolder(): void {
      this.http.post(' http://localhost:4000/administrator-director-shareolders', this.nuevoAdministrator)
      .subscribe(
        {
          next:  data => {
            console.log('Administrator Director Shareolder creado exitosamente');
            this.nuevoAdministrator = {
            }; 
            this.router.navigate(['information-banking/',this.providerId])

        },
          error: error => {
            console.error('Error al crear el Administrator Director Shareolder', error);
          }
        },
        
      );
    }

}
