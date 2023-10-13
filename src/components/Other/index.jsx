import styles from './Other.module.css'
import Honda from '../Honda'
import Bmw from '../Bmw'
import Audi from '../Audi'
import Tesla from '../Tesla'
import { Routes, Link, Route } from 'react-router-dom'
const Other = () => {
   return (
      <div>
         <h2 className={styles.other}>Other</h2>
         <div className={styles.other_row}>
            <ul className={styles.other_list}>
               <li className={styles.brand}><Link to="">Honda</Link></li>
               <li className={styles.brand}><Link to="BMW">BMW</Link></li>
               <li className={styles.brand}><Link to="Audi">Audi</Link></li>
               <li className={styles.brand}><Link to="Tesla">Tesla</Link></li>
            </ul>
            <Routes>
               <Route path='' element={<Honda />} />
               <Route path='BMW' element={<Bmw />} />
               <Route path='Audi' element={<Audi />} />
               <Route path='Tesla' element={<Tesla />} />
            </Routes>
         </div>
      </div>
   )
}
export default Other