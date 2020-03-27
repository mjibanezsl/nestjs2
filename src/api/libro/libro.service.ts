import { Injectable } from '@nestjs/common';
import { Libro } from './libro';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';




@Injectable()
export class LibroService {

  constructor(@InjectModel('Libro3') private readonly modelo: Model<Libro>) {}

    public libros: Libro [] = [];
    public libro:Libro;

    async create(libro: Libro): Promise<Libro> {
      const createdAnimal = new this.modelo(libro);
      return await createdAnimal.save();
    }

    async findAll(): Promise<Libro[]> {
      return await this.modelo.find().exec();
    }

    async findById(id: string): Promise<Libro> {
      return await this.modelo.findById(id);
    }
  
    async updateById(id: string, animal: Libro): Promise<Libro> {
      const cambios = { titulo: this.libro.titulo,  autor: this.libro.autor, fecha: this.libro.fecha};
      await this.modelo.updateOne({ _id : id }, cambios);
      return await this.modelo.findById(id);
    }
  
    async delete(id: string): Promise<Libro> {
      const animalG = await this.modelo.findById(id);
      await this.modelo.findOneAndRemove({ _id : id });
      return animalG;
    }

    /*SIn acceso a BD
    getDatos(): Libro[] {
      return this.libros;
    }

    addDatos(mylibro:Libro) {

      this.libros.push(mylibro);          
      
      


       
      }*/
}