
export interface Istate{
    message:string | null
}
  
export interface shareMealAction{
    (prevState:Istate, formData:FormData) : Promise<Istate>
  }