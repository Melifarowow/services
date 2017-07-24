import { Injectable } from '@angular/core';

class PaintFormModel {
  width: number
  length: number
  height: number
  spend: number
  price: number
  layers: number
}

@Injectable()
export class PaintService {

  constructor() {}

  private square({width, length, height}): number {
    return width * length * height
  }

  private litres(square: number, {spend, layers}): number {
    return square * spend * layers
  }

  private botles(litres: number): number {
    return Math.ceil(litres)
  }

  private price(botles: number, {price}) {
    return botles * price
  }

  calc(data: PaintFormModel): string {
    const square = this.square(data)
    const botles = this.botles(this.litres(square, data))
    const price = this.price(botles, data)
    return `Площадь ваших стен составляет ${square} м. кв. Для покраски вам необходимо ${botles} банок краски. Подготовьте ${price} грн`
  }
}
