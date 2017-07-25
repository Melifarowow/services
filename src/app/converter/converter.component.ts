import { Component, OnInit } from '@angular/core';
import { ConverterService, Currency } from './converter.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  currencies: Array<Currency>
  converterForm: FormGroup
  result: number
  constructor(
    private converterService: ConverterService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.builtConverterForm()
    this.currencies = this.converterService.getCurrencies()
    this.initForm()
  }

  builtConverterForm() {
    this.converterForm = this.formBuilder.group({
      amount: ['', [
        Validators.required,
        Validators.pattern('[0-9]+(\.[0-9]+)?'),
        Validators.min(0.01),
        Validators.max(1000000)
      ]],
      from: ['', Validators.required],
      to: ['', Validators.required]
    })
    this.converterForm.valueChanges.subscribe(() => this.convert())
  }

  initForm() {
    if(this.currencies && this.converterForm) {
      this.converterForm.setValue({
        amount: 1,
        from: this.currencies[0],
        to: this.currencies.length > 1 ? this.currencies[1] : this.currencies[0]
      })
    }
  }
  convert() {
    if(this.converterForm.valid) {
      this.result = this.converterService.convert(this.converterForm.value)
    } else {
      this.result = 0
    }
    
  }
}
