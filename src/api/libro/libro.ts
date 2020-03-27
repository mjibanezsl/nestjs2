import { IsInt, IsString } from 'class-validator';

export class Libro {
    @IsInt()
    id: number;
    @IsString()
    titulo: string;
    @IsString()
    autor: string;
    fecha: Date;
}
