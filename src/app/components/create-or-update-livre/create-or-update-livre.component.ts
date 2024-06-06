import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-create-or-update-livre',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-or-update-livre.component.html',
  styleUrl: './create-or-update-livre.component.css'
})
export class CreateOrUpdateLivreComponent implements OnInit {

  constructor(private activatedRouter: ActivatedRoute,
    private apiService: ApiService, private formBuilder: FormBuilder,
    private router: Router
  ) { }
  isEditMode = false
  livreId?: number
  bookData: any
  bookForm: FormGroup
  initedForm: boolean = false

  async ngOnInit() {
    this.activatedRouter.queryParams.subscribe(async data => {
      if (data && data["livreId"]) {
        this.isEditMode = true
        this.livreId = +data["livreId"]
        await this.getBookInformations()
        this.initForm()
      }
    })
    if (!this.isEditMode) {
      this.initForm()
    }
  }

  initForm() {
    if (this.isEditMode) {
      this.bookForm = this.formBuilder.group({
        title: new FormControl(this.bookData.title, [Validators.required]),
        author: new FormControl(this.bookData.author, [Validators.required]),
        genre: new FormControl(this.bookData.genre),
        anneePublication: new FormControl(this.bookData.anneePublication)
      })
    }
    else {
      this.bookForm = this.formBuilder.group({
        title: new FormControl(null, [Validators.required]),
        author: new FormControl(null, [Validators.required]),
        genre: new FormControl(null),
        anneePublication: new FormControl()
      })
    }
    this.initedForm = true
  }


  async getBookInformations() {
    this.bookData = await firstValueFrom(this.apiService.getBookById(this.livreId))
  }

  submitForm() {
    console.log(this.bookForm.getRawValue())

    if (this.isEditMode) {
      this.apiService.updateBook(this.livreId, this.bookForm.getRawValue()).subscribe(
        data => {
          console.log(data)
          this.router.navigate(["livre"])
        }
      )
    }
    else {
      this.apiService.createBook(this.bookForm.getRawValue()).subscribe(data => {
        console.log(data)
        this.router.navigate(["livre"])
      })
    }
  }


}
