import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-livre',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './livre.component.html',
  styleUrl: './livre.component.css'
})
export class LivreComponent implements OnInit {

  books : any
  constructor(private router : Router, private apiService : ApiService){

  }
  async ngOnInit() {
   await this.getAllBooks()
  }

  async getAllBooks(){
    let data =  await firstValueFrom(this.apiService.getAll())

    if(data && Array.isArray(data)){
      this.books = data[0]
    }
  }

  

  addLivre(){
    this.router.navigate(["manage-livre"])
  }

  editBook(bookId : any){
    this.router.navigate(["manage-livre"],{
      queryParams : {
        livreId : bookId
      }
    })
  }

  deleteBook(bookId : any){
    this.apiService.deleteBook(bookId).subscribe(async data =>{
      alert('Book Deleted')
     await this.getAllBooks()
    })
  }
}
