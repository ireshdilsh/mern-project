export interface Article{
    _id?: string;
    id?: string;
    title: string;
    content: string;
    name:string;
    email:string;
    date:Date | string;
    readingTime?: string;
    viewCount?: number;
    likeCount?: number;
    image?: string;
}