
//****** Creamos el servicio para adidas *******/

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AdidasService {

    private adidas:Adida[] = [ 
        {
           nombre: "Tenis SuperStar Multi FZ0245",
           value: 319.999,
           img: "assets/img/Tenis_Superstar_Multi_FZ0245_01_standard.jpg",
           date: "",
           marca: "Adidas" 
        },
        {
            nombre: "Adidas Perfomance Sanma",
            value: 379.999,
            img: "assets/img/71gFzfxnGIS._AC_UY625_.jpg",
            date: "",
            marca: "Adidas" 
         },
         {
            nombre: "Adidas ZX",
            value: 309.999,
            img: "assets/img/originals_fw20_zx_plp_story-snippet-2-launch-d_tcm195-566164.jpg",
            date: "",
            marca: "Adidas" 
         },
        {
           nombre: "Tenis SuperStar Multi FZ0245",
           value: 319.999,
           img: "assets/img/Tenis_Superstar_Multi_FZ0245_01_standard.jpg",
           date: "",
           marca: "Adidas" 
        },
        {
            nombre: "Adidas Perfomance Sanma",
            value: 379.999,
            img: "assets/img/71gFzfxnGIS._AC_UY625_.jpg",
            date: "",
            marca: "Adidas" 
         },
         {
            nombre: "Adidas ZX",
            value: 309.999,
            img: "assets/img/originals_fw20_zx_plp_story-snippet-2-launch-d_tcm195-566164.jpg",
            date: "",
            marca: "Adidas" 
         },
        {
           nombre: "Tenis SuperStar Multi FZ0245",
           value: 319.999,
           img: "assets/img/Tenis_Superstar_Multi_FZ0245_01_standard.jpg",
           date: "",
           marca: "Adidas" 
        },
        {
            nombre: "Adidas Perfomance Sanma",
            value: 379.999,
            img: "assets/img/71gFzfxnGIS._AC_UY625_.jpg",
            date: "",
            marca: "Adidas" 
         },
         {
            nombre: "Adidas ZX",
            value: 309.999,
            img: "assets/img/originals_fw20_zx_plp_story-snippet-2-launch-d_tcm195-566164.jpg",
            date: "",
            marca: "Adidas" 
         },
    ];  


constructor() {
    console.log("Servicio Listo");
}

public getAdidas():Adida[] {
    return this.adidas;
}
getAdida(idx: number) {
    return this.adidas[idx];
}


}



export interface Adida {
    nombre: string;
    value: number;
    img: string;
    date: string;
    marca: string;
}