let words: string[] = [
    'COMPUTADORA',
    'RELOJ',
    'OREJERAS',
    'VEHICULO',
    'ANIMAL',
    'VETERINARIO',
    'CELULAR',
    'LAPTOP',
    'TASA',
    'LIBRETA',
    'BOCINA',
    'TECLADO',
    'LLAVES',
    'VENTILADOR',
    'BOTELLA',
    'PUERTA',
    'PANTALLA',
    'SILLA',
    'CAMA',
    'CHAMARRA',
    'PROTEINA',
    'PARAGUAS',
    'ZAPATOS',
    'TENIS',
    'BOTAS',
    'CALENDARIO',
    'ESTUFA',
    'REFRIGERADOR',
    'MESA',
    'CAFE',
    'TE',
    'VITAMINAS',
    'TELEFONO'
];


export function getRandomWord() {

    const randomIndex = Math.floor( Math.random() * words.length );
    return words[randomIndex];
    
}