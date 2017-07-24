import { Component, OnInit } from '@angular/core';
import { ConverterService } from './converter.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  converterForm: FormGroup
  constructor(
    private converterService: ConverterService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  builtConverterForm() {
    this.converterForm = this.formBuilder.group({
      amount: ['10', [
        Validators.required,
        Validators.pattern('[0-9]+(\.[0-9]+)?'),
        Validators.min(0.01),
        Validators.max(1000000)
      ]]
    })
  }

}
