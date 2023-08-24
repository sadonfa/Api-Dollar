import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {

  providerId: number = 1;
  dataConfirm: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient,private router:Router) {}


  ngOnInit(): void {
   

    this.route.paramMap.subscribe(params => {
      this.providerId = Number(params.get('providerId'));
    });
    this.getDataProvider();
  }

  getDataProvider(): void {
    this.http.get<any[]>(`http://localhost:4000/providers/${this.providerId}`).subscribe(
      {
        next: data => {
          this.dataConfirm = data;
          console.log(this.dataConfirm);
          
        },
        error: error => {
          console.error(error);
        }
      }
    );
  }
}
