
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class PatprimoService {
    
    private patprimo:Patprimo[] = [
        {
            nombre: "Zapatos en cuero",
            value: 169.000,
            img: "assets/img/30720003-10_1.jpg",
            date: "",
            marca: "Patprimo" 
         },
         {
            nombre: "Tenis Casuales",
            value: 139.000,
            img: "assets/img/44720009-10_4.jpg",
            date: "",
            marca: "Patprimo" 
         },
         {
            nombre: "Tenis 30720008",
            value: 129.000,
            img: "assets/img/30720008-0097_4.jpg",
            date: "",
            marca: "Patprimo" 
         },
        {
            nombre: "Zapatos en cuero",
            value: 169.000,
            img: "assets/img/30720003-10_1.jpg",
            date: "",
            marca: "Patprimo" 
         },
         {
            nombre: "Tenis Casuales",
            value: 139.000,
            img: "assets/img/44720009-10_4.jpg",
            date: "",
            marca: "Patprimo" 
         },
         {
            nombre: "Tenis 30720008",
            value: 129.000,
            img: "assets/img/30720008-0097_4.jpg",
            date: "",
            marca: "Patprimo" 
         },
        {
            nombre: "Zapatos en cuero",
            value: 169.000,
            img: "assets/img/30720003-10_1.jpg",
            date: "",
            marca: "Patprimo" 
         },
         {
            nombre: "Tenis Casuales",
            value: 139.000,
            img: "assets/img/44720009-10_4.jpg",
            date: "",
            marca: "Patprimo" 
         },
         {
            nombre: "Tenis 30720008",
            value: 129.000,
            img: "assets/img/30720008-0097_4.jpg",
            date: "",
            marca: "Patprimo" 
         },
    ]

    constructor() {
        console.log("estamos ready...")
    }

    public getPatprimos():Patprimo[] {
        return this.patprimo;
    }
    getPatprimo(idx: number) {
        return this.patprimo[idx];
    }

}


export interface Patprimo {
    nombre: string;
    value: number;
    img: string;
    date: string;
    marca: string;
}