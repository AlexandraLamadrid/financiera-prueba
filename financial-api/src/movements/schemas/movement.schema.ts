import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MovementDocument = Movement & Document;

@Schema()
export class Movement {
  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  type: string;
}

export const MovementSchema = SchemaFactory.createForClass(Movement);
