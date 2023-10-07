import styles from "../../assets/styles/modules/footer.module.css"
import { RiInstagramFill, RiFacebookBoxFill, RiTwitterFill } from 'react-icons/ri'

function Footer() {
  return (
    <div>
       <footer className={styles.footer}>
          <div className={styles.top_content}>
            <div>
              <div className={styles.logo_container}>
                <a className={styles.logo} href="">Sprinter</a>
                <p>Style that speaks volumes</p>
                <ul className={styles.socials_container}>
                  <li><a href=""><RiInstagramFill /></a></li>
                  <li><a href=""><RiFacebookBoxFill /></a></li>
                  <li><a href=""><RiTwitterFill /></a></li>

                </ul>
              </div>

            </div>
            <div className={styles.footer_more}>
              <ul>
                <h4>Company</h4>
                <li><a href="">About us</a></li>
                <li><a href="">Contact</a></li>
              </ul>
              <ul>
                <h4>Help</h4>
                <li><a href="">Help center</a></li>
                <li><a href="">Help center</a></li>
              </ul>
              <ul>
                <h4>Legal</h4>
                <li><a href="">Terms & services</a></li>
                <li><a href="">Privacy policy</a></li>
              </ul>
            </div>
          </div>
      </footer>
    </div>
  )
}

export default Footer
