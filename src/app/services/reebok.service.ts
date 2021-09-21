import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ReebokService {

    private rebook:Reebok[] = [
        {
            nombre: "Tenis Runner Negro FX",
            value: 209.900,
            img: "assets/img/Tenis_Reebok_Runner_5_Negro_FX1812.jpg",
            date: "",
            marca: "Reebok" 
         },
         {
             nombre: "Classic White",
             value: 279.900,
             img: "assets/img/reebok-classics-7510-847649-1-product.jpg",
             date: "",
             marca: "Reebok" 
          },
          {
             nombre: "Tenis Nano x1 grit",
             value: 229.900,
             img: "assets/img/tenis-reebok-nano-x1-grit-is-S42564-1.png",
             date: "",
             marca: "Reebok" 
          },
        {
            nombre: "Tenis Runner Negro FX",
            value: 209.900,
            img: "assets/img/Tenis_Reebok_Runner_5_Negro_FX1812.jpg",
            date: "",
            marca: "Reebok" 
         },
         {
             nombre: "Classic White",
             value: 279.900,
             img: "assets/img/reebok-classics-7510-847649-1-product.jpg",
             date: "",
             marca: "Reebok" 
          },
          {
             nombre: "Tenis Nano x1 grit",
             value: 229.900,
             img: "assets/img/tenis-reebok-nano-x1-grit-is-S42564-1.png",
             date: "",
             marca: "Reebok" 
          },
        {
            nombre: "Tenis Runner Negro FX",
            value: 209.900,
            img: "assets/img/Tenis_Reebok_Runner_5_Negro_FX1812.jpg",
            date: "",
            marca: "Reebok" 
         },
         {
             nombre: "Classic White",
             value: 279.900,
             img: "assets/img/reebok-classics-7510-847649-1-product.jpg",
             date: "",
             marca: "Reebok" 
          },
          {
             nombre: "Tenis Nano x1 grit",
             value: 229.900,
             img: "assets/img/tenis-reebok-nano-x1-grit-is-S42564-1.png",
             date: "",
             marca: "Reebok" 
          },
    ]

    constructor() {

    }

    public getReeboks():Reebok[] {
        return this.rebook;
    }
    getReebok(idx: number) {
        return this.rebook[idx];
    }
} 


export interface Reebok {
    nombre: string;
    value: number;
    img: string;
    date: string;
    marca: string;
}