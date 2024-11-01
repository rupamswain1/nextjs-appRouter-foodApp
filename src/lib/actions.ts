'use server'

import { redirect } from "next/navigation"
import { IsaveMeal } from "./interface/meals"
import { saveMeal } from "./meals"

export const addMeal = async (formData:FormData)=>{
    'use server'
    const meal:IsaveMeal = {
      title: formData.get('title') as string,
      summary: formData.get('summary') as string,
      instructions: formData.get('instructions') as string,
      image: formData.get('mealImage') as File,
      creator: formData.get('name') as string,
      creator_email: formData.get('email') as string
    }

    await saveMeal(meal);
    redirect('/meals');
  }