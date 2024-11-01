'use client'

import { useFormStatus } from "react-dom"
import Button from "../Button/Button";

const MealSubmitButton = () =>{
    const { pending } = useFormStatus();
    return   <Button as="button" type="primary" text={pending?'Submitting ... ':'Share Meal'} disabled={pending}/>
}

export default MealSubmitButton;