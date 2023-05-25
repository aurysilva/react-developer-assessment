import './FooterStyle.module.css';
import Image from '../image/Image';

const Footer = () => {
  return (
    <footer>
        <Image maxWidth="120px" alt="Post Logo" className="Change this class" src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa694e2d3-0da4-4c05-a410-1aa64dc2c772_5001x1460.png" />
        <h3>Made with love</h3>
        <p>@ Copyright 2023, "The Post" by <a href="https://www.aurysilva.co.uk/" target='_blank' rel="noreferrer">Aury Silva</a></p>
    </footer>
  );
};

export default Footer;
