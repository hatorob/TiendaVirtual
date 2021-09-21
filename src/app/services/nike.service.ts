
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NikeService {

    private nike:Nike[] = [
        {
            nombre: "812654-010NIKETANJ3",
            value: 264.900,
            img: "assets/img/812654-010NIKETANJ3.jpg",
            date: "",
            marca: "Nike" 
         },
         {
             nombre: "Nike Hombre",
             value: 300.900,
             img: "assets/img/TENIS-NIKE-HOMBRE-20191107173810.2739530015.jpg",
             date: "",
             marca: "Nike" 
          },
          {
             nombre: "Nike Air Force",
             value: 254.900,
             img: "assets/img/WhatsApp-Image-2016-12-04-at-10.56.05-AM.jpeg",
             date: "",
             marca: "Nike" 
          },
        {
            nombre: "812654-010NIKETANJ3",
            value: 264.900,
            img: "assets/img/812654-010NIKETANJ3.jpg",
            date: "",
            marca: "Nike" 
         },
         {
             nombre: "Nike Hombre",
             value: 300.900,
             img: "assets/img/TENIS-NIKE-HOMBRE-20191107173810.2739530015.jpg",
             date: "",
             marca: "Nike" 
          },
          {
             nombre: "Nike Air Force",
             value: 254.900,
             img: "assets/img/WhatsApp-Image-2016-12-04-at-10.56.05-AM.jpeg",
             date: "",
             marca: "Nike" 
          },
        {
            nombre: "812654-010NIKETANJ3",
            value: 264.900,
            img: "assets/img/812654-010NIKETANJ3.jpg",
            date: "",
            marca: "Nike" 
         },
         {
             nombre: "Nike Hombre",
             value: 300.900,
             img: "assets/img/TENIS-NIKE-HOMBRE-20191107173810.2739530015.jpg",
             date: "",
             marca: "Nike" 
          },
          {
             nombre: "Nike Air Force",
             value: 254.900,
             img: "assets/img/WhatsApp-Image-2016-12-04-at-10.56.05-AM.jpeg",
             date: "",
             marca: "Nike" 
          },
    
    ]

    constructor() {

    }
    
    public getNikes():Nike[] {
        return this.nike;
    }
    getNike(idx: number) {
        return this.nike[idx];
    }

}

export interface Nike {
    nombre: string;
    value: number;
    img: string;
    date: string;
    marca: string;
}



