import { Injectable } from '@angular/core';

export class Currency {
  id: number
  label: string
  value: number
}

class ConverterFormModel {
  from: Currency
  to: Currency
  amount: number
}

@Injectable()
export class ConverterService {
  currencies: Array<Currency> = [
    { id: 0, label: 'UAH', value: 1 },
    { id: 1, label: 'USD', value: 0.039 },
    { id: 2, label: 'EUR', value: 0.033 }
  ]
  constructor() { }

  convert(data: ConverterFormModel): number {
    console.log(data)
    const baseValue = this.currencies[0].value
    const toValue = this.currencies.filter(currency => currency.id === data.to.id)[0].value
    const fromValue = this.currencies.filter(currency => currency.id === data.from.id)[0].value
    return baseValue / fromValue * toValue * data.amount
  }

  getCurrencies() {
    return this.currencies
  }
}
