import mongoose, { Schema, Document } from 'mongoose';

interface IAlbum extends Document {
    title: string;
    artist: string;
    releaseDate: Date;
    tracks: string[];
}

const AlbumSchema: Schema = new Schema({
    title: { type: String, required: true },
});

export const Album = mongoose.model<IAlbum>('Album', AlbumSchema);
