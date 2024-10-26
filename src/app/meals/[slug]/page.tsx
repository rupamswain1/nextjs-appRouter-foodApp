import { getMeal } from '@/lib/meals';
import styles from './page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';
const SubPage = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const mealData = getMeal(slug);
  if (!mealData) {
    notFound();
  }
  mealData.instructions = mealData.instructions.replace(/\n/g, '<br/>');
  return (
    <>
      {' '}
      <header className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src={mealData.image} alt={mealData.title} fill />
        </div>
        <div className={styles.headerContent}>
          <div className="heading">{mealData.title}</div>
          <p>
            {' '}
            by <span className="highlightedText">{mealData.creator}</span>
          </p>
          <p className="subHeaderText">{mealData.summary}</p>
        </div>
      </header>
      <main>
        <div
          className={styles.instructions}
          dangerouslySetInnerHTML={{ __html: mealData.instructions }}
        ></div>
      </main>
    </>
  );
};

export default SubPage;
