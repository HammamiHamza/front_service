import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  title = 'front_service';

 books: any = [];
  constructor(private apiService: ApiService) { }  
  fetchJoke(): void {
    this.apiService.getAll().subscribe((data: any) => {
      this.books = data;
      console.log('my books',data);
    });
  }
}
