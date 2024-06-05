import { Injectable } from '@nestjs/common';
import { CreateMovementDto } from './dto/create-movement.dto';
import { UpdateMovementDto } from './dto/update-movement.dto';

@Injectable()
export class MovementsService {
  private movements = [];

  create(createMovementDto: CreateMovementDto) {
    const newMovement = { id: Date.now(), ...createMovementDto };
    this.movements.push(newMovement);
    return newMovement;
  }

  findAll() {
    return this.movements;
  }

  findOne(id: string) {
    return this.movements.find((movement) => movement.id === +id);
  }

  update(id: string, updateMovementDto: UpdateMovementDto) {
    const index = this.movements.findIndex((movement) => movement.id === +id);
    if (index >= 0) {
      this.movements[index] = {
        ...this.movements[index],
        ...updateMovementDto,
      };
      return this.movements[index];
    }
    return null;
  }

  remove(id: string) {
    const index = this.movements.findIndex((movement) => movement.id === +id);
    if (index >= 0) {
      return this.movements.splice(index, 1);
    }
    return null;
  }

  getUserCapital() {
    return this.movements.reduce((acc, movement) => {
      if (movement.tipo === 'Ingreso') {
        return acc + movement.cantidad;
      } else if (movement.tipo === 'Gasto') {
        return acc - movement.cantidad;
      }
      return acc;
    }, 0);
  }
}
