import sql from 'better-sqlite3';
import { IMeal, IsaveMeal } from './interface/meals';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';

const db = sql('meals.db');

export async function getMeals(): Promise<IMeal[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare('SELECT * FROM meals').all() as IMeal[];
}

export function getMeal(slug: string): IMeal {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug) as IMeal;
}

export async function saveMeal(meal:IsaveMeal){
  meal.slug= slugify(meal.title, {lower:true})
  meal.instructions = xss(meal.instructions);

  const extension = meal.image?.name?.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await (meal.image as File).arrayBuffer();
  stream.write(Buffer.from(bufferedImage),(error)=>{
    if(error){
      throw new Error('Saving Image Failed');
    }
  });
  const imagePath = `/images/${fileName}`;
  const stmt = db.prepare(`
    INSERT INTO meals VALUES (
       null,
       @slug,
       @title,
       @imagePath,
       @summary,
       @instructions,
       @creator,
       @creator_email
    )
 `);
  stmt.run({...meal,imagePath})

}