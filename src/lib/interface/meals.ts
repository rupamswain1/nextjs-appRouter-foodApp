import { File } from "node:buffer";

export interface IMeal {
  id: number;
  slug: string;
  title: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}



export interface IsaveMeal{
  title:string;
  summary:string;
  instructions: string;
  image:File | { name?: string };
  creator:string;
  creator_email:string;
  slug?:string;
}