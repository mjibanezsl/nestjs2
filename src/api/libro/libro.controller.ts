 
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Libro } from './libro';
import { LibroService } from './libro.service';


 

@Controller('libro')
export class LibroController {

  private libro: Libro[] = [];
  constructor(private readonly restService: LibroService) {
    
  }
  @Post()
  async create(@Body() libro: Libro): Promise<Libro> {
    const libroD = await this.restService.create(libro);
    return libroD;
  }

  @Get()
  async findAll(): Promise<Libro[]> {
    return this.restService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Libro> {
    return this.restService.findById(id);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() animal: Libro): Promise<Libro> {
    return this.restService.updateById(id, animal);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Libro> {
    return this.restService.delete(id);
  }
/* Sin acceso a BD
  @Get()
  getDatos(): Libro[] {
    return this.restService.getDatos();
  }
  @Post()
  async create(@Body() mylibro: Libro) {
    //this.libro.push(mylibro);
    //return `This action adds a new object with name: ${libro.titulo}`;
 
    const libro = new Libro();
    libro.id = 1;   
    libro.titulo = 'quijote';
    libro.autor = 'cervantes';
    libro.fecha=  new Date("1850-01-16");  
    this.restService.addDatos(libro);
    return `This action adds a new object with name: ${libro.titulo}`;
  }
   
    @Get('/:id') // mostrar
    getById(@Param() params): Libro {
      // Capturar e id y consultar a la BBDD
      const libro = new Libro();
      libro.id = params.id;
      libro.titulo = 'quijote';
      libro.autor = 'cervantes';
      libro.fecha=  new Date("1850-01-16");   
      return libro;
    }
    @Put('/:id') // modificar un objeto
    modifyById(@Param() params,
               @Body() updateLibro: Librosinid): Libro {
      // Capturar el id y buscarlo en la BBDD y luego guardar los cambios
      const libro = new Libro();
      libro.id = 1;
      libro.titulo = updateLibro.titulo;
      libro.autor = updateLibro.autor;
      return libro;
    }
    @Delete('/:id') // borrar
    deleteById(@Param() params): Libro {
      // coger el id consultar a la bbdd y luego borrar el objeto
      const libro = new Libro();
      libro.id = params.id;
      libro.titulo = 'quijote';
      libro.autor = 'cervantes';
      libro.fecha=  new Date("1850-01-16");  ;  
      return libro;
}*/
}