'use server'

import { redirect } from "next/navigation"
import { IsaveMeal } from "./interface/meals"
import { saveMeal } from "./meals"
import { shareMealAction } from "./interface/pageInterface"
import { revalidatePath } from "next/cache"

const invalidText = (text:string) =>{
  return !text && text.trim() === '';
}

export const addMeal:shareMealAction = async (prevState,formData)=>{
    'use server'
    const meal:IsaveMeal = {
      title: formData.get('title') as string,
      summary: formData.get('summary') as string,
      instructions: formData.get('instructions') as string,
      image: formData.get('mealImage') as File,
      creator: formData.get('name') as string,
      creator_email: formData.get('email') as string
    }

    if(
      invalidText(meal.title) ||
      invalidText(meal.summary) ||
      invalidText(meal.instructions) ||
      invalidText(meal.creator) || 
      invalidText(meal.creator_email) ||
      !meal.image ||
      meal.image?.size === 0
    )
    {
      return {
        message : 'Invalid Input'
      }
    }

    await saveMeal(meal);
    revalidatePath('/meals');
    redirect('/meals');
  }