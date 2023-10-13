import { Link } from 'react-router-dom'
import styles from './Header.module.css'
const Header = () => {
   return (
      <div className={styles.header}>
         <div className={styles.header_logo}><img alt='' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Ford_logo.svg/2560px-Ford_logo.svg.png" /></div>
         <ul>
            <li><Link to="/" className={styles.header_link}>About Us</Link></li>
            <li><Link to="/Histori" className={styles.header_link}>Histori</Link></li>
            <li><Link to="/Galleri" className={styles.header_link}>Galleri</Link></li>
            <li><Link to="/Contact" className={styles.header_link}>Contact</Link></li>
            <li><Link to="/Other" className={styles.header_link}>Other Brands</Link></li>
         </ul>
      </div>
   )
}
export default Header