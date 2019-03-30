import { Schema, model, Document } from 'mongoose'

interface MovieInterface extends Document {
    name?: string,
    director?: string,
    present(): string
}

const MovieSchema = new Schema({
  name: String,
  director: String
}, {
  timestamps: true
})

MovieSchema.methods.present = function (): string {
  return this.name + ' created by ' + this.director
}

export default model<MovieInterface>('Movie', MovieSchema)
