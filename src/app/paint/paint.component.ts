import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { PaintService } from './paint.service'

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.css']
})
export class PaintComponent implements OnInit {
  paintForm: FormGroup
  message: string
  constructor(
    private formBuilder: FormBuilder,
    private paintService: PaintService
  ) { }

  ngOnInit() {
    this.buildPaintForm()
  }

  buildPaintForm() {
    this.paintForm = this.formBuilder.group({
      width: ['10', [
        Validators.required,
        Validators.pattern('[0-9]+(\.[0-9]+)?'),
        Validators.min(1),
        Validators.max(1000)
      ]],
      length: ['10', [
        Validators.required,
        Validators.pattern('[0-9]+(\.[0-9]+)?'),
        Validators.min(1),
        Validators.max(1000)
      ]],
      height: ['2', [
        Validators.required,
        Validators.pattern('[0-9]+(\.[0-9]+)?'),
        Validators.min(1),
        Validators.max(100)
      ]],
      spend: ['0.1', [
        Validators.required,
        Validators.pattern('[0-9]+(\.[0-9]+)?'),
        Validators.min(0.1),
        Validators.max(0.5)
      ]],
      layers: ['1', [
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.min(1),
        Validators.max(4)
      ]],
      price: ['120', [
        Validators.required,
        Validators.pattern('[0-9]+(\.[0-9]+)?'),
        Validators.min(1),
        Validators.max(1000)
      ]]
    })
    this.paintForm.valueChanges.subscribe(data => this.calc())
  }

  calc() {
    if(this.paintForm.valid) {
      this.message = this.paintService.calc(this.paintForm.value)
    } else {
      this.message = ''
    }
  }

}
