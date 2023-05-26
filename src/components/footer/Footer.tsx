import styles from './FooterStyle.module.css';
import Image from '../image/Image';

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <Image
          maxWidth="120px"
          radius='25px'
          alt="Post Logo"
          customClass="footer-logo"
          src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa694e2d3-0da4-4c05-a410-1aa64dc2c772_5001x1460.png"
        />
        <h5>Made with love</h5>
        <p>
          &copy; {new Date().getFullYear()}, "The Post" by {webAuthor()}
        </p>
      </div>
    </footer>
  );

  function webAuthor() {
    return <a href="https://www.aurysilva.co.uk/" target="_blank" rel="noreferrer">Aury Silva </a>;
  }
};

export default Footer;
