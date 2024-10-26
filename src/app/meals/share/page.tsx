import Button from '@/components/Button/Button';
import styles from './page.module.css';

const SharePage = () => {
  return <div>
    <header className={styles.headerContainer}>
      <h1 className='heading'>Share your 
        <span className='highlightedText'> favourite meal</span>
      </h1>
      <p>or any other meal you feel needs sharing</p>
    </header>
    <main className='styles.shareForm'>
      <form>
        <div>
          <p>
            <label htmlFor='name'>Your Name</label>
            <input type="text" id="name" name='name' required/>
          </p>
          <p>
            <label htmlFor='email'>Your Email</label>
            <input type="email" id="email" name='email' required/>
          </p>
        </div>
        <p>
          <label htmlFor='title'>Title</label>
          <input type="text" id="title" name="title" required/>
        </p>
        <p>
          <label htmlFor='shortSummary'>Short Summmary</label>
          <input type="text" id="shortSummary" name="summary"/>
        </p>
        <p>
          <label htmlFor='instructions'>
            Instructions
          </label>
          <textarea id="instructions"/>
        </p>
        Image Picker

       <Button
        as="button"
        type='primary'
        text='Share Meal'
       />
       </form>
    </main>
  </div>
};
export default SharePage;
