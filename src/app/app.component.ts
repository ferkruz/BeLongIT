import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apispiner';
  p= 0;  // put the default values

  totalAngularPackages:any[];

  constructor(private http: HttpClient) {
    this.totalAngularPackages=[];
   }

  makeHttpCall() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/comments')
      .subscribe((datos) => {
        console.log("Datos:",datos);
        this.totalAngularPackages = datos;
      });
  }

}