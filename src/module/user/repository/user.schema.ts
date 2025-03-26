import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import type { HydratedDocument } from 'mongoose'

export type UserDocument = HydratedDocument<User>

@Schema({
  id: true,
  timestamps: { createdAt: 'create', updatedAt: 'update' },
  collection: 'User'
})
export class User {
  @Prop({ type: String, unique: true, required: true })
  mail: string

  @Prop({ type: String, required: true })
  name: string
}

export const UserSchema = SchemaFactory.createForClass(User)
