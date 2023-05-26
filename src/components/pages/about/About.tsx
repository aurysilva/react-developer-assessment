import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutStyle.module.css'
import PageTile from '../../page-tile/PageTile';

const AboutPage: React.FC = () => {
  return (
    <> 
        <PageTile
            pageTile="About Us"
            pageSubTile="Find out more about THE POST"
            bgImage="https://calliedoart.files.wordpress.com/2015/02/cropped-paralax-background-3.jpg"
        />

        <div className={styles.container}>
            <h2>This is a Full width plain page. Why? Just because...</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor elementum odio ac pulvinar.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas
                sit amet felis commodo, sagittis tortor sed, feugiat justo. Donec fermentum lacinia lectus, vel
                ultricies sem feugiat sed. Proin vitae tortor euismod, ullamcorper dolor et, tempor ipsum.
                <br /><br />
                Vivamus a est eget lectus semper consequat. Nullam ullamcorper tortor vitae neque hendrerit, a
                iaculis dolor bibendum. Quisque eu convallis risus. In eget ante vitae arcu semper scelerisque.
                Donec laoreet lectus sit amet nunc volutpat, et commodo metus convallis. Fusce eget sem
                vestibulum, interdum tortor sit amet, tincidunt ipsum.
                Vivamus a est eget lectus semper consequat. Nullam ullamcorper tortor vitae neque hendrerit, a
                iaculis dolor bibendum. Quisque eu convallis risus. In eget ante vitae arcu semper scelerisque.
                Donec laoreet lectus sit amet nunc volutpat, et commodo metus convallis. Fusce eget sem
                vestibulum, interdum tortor sit amet, tincidunt ipsum.
                <br />
                Vivamus a est eget lectus semper consequat. Nullam ullamcorper tortor vitae neque hendrerit, a
                iaculis dolor bibendum. Quisque eu convallis risus. In eget ante vitae arcu semper scelerisque.
                Donec laoreet lectus sit amet nunc volutpat, et commodo metus convallis. Fusce eget sem
                vestibulum, interdum tortor sit amet, tincidunt ipsum.
                Vivamus a est eget lectus semper consequat. Nullam ullamcorper tortor vitae neque hendrerit, a
                iaculis dolor bibendum. Quisque eu convallis risus. In eget ante vitae arcu semper scelerisque.
                Donec laoreet lectus sit amet nunc volutpat, et commodo metus convallis. Fusce eget sem
                vestibulum, interdum tortor sit amet, tincidunt ipsum.
                Vivamus a est eget lectus semper consequat. Nullam ullamcorper tortor vitae neque hendrerit, a
                iaculis dolor bibendum. Quisque eu convallis risus. In eget ante vitae arcu semper scelerisque.
                Donec laoreet lectus sit amet nunc volutpat, et commodo metus convallis. Fusce eget sem
                vestibulum, interdum tortor sit amet, tincidunt ipsum.
                Vivamus a est eget lectus semper consequat. Nullam ullamcorper tortor vitae neque hendrerit, a
                iaculis dolor bibendum. Quisque eu convallis risus. In eget ante vitae arcu semper scelerisque.
                Donec laoreet lectus sit amet nunc volutpat, et commodo metus convallis. Fusce eget sem
                vestibulum, interdum tortor sit amet, tincidunt ipsum.
                <br /><br />
                Vivamus a est eget lectus semper consequat. Nullam ullamcorper tortor vitae neque hendrerit, a
                iaculis dolor bibendum. Quisque eu convallis risus. In eget ante vitae arcu semper scelerisque.
                Donec laoreet lectus sit amet nunc volutpat, et commodo metus convallis. Fusce eget sem
                vestibulum, interdum tortor sit amet, tincidunt ipsum.
                Vivamus a est eget lectus semper consequat. Nullam ullamcorper tortor vitae neque hendrerit, a
                iaculis dolor bibendum. Quisque eu convallis risus. In eget ante vitae arcu semper scelerisque.
                Donec laoreet lectus sit amet nunc volutpat, et commodo metus convallis. Fusce eget sem
                vestibulum, interdum tortor sit amet, tincidunt ipsum.
                
                Vivamus a est eget lectus semper consequat. Nullam ullamcorper tortor vitae neque hendrerit, a
                iaculis dolor bibendum. Quisque eu convallis risus. In eget ante vitae arcu semper scelerisque.
                Donec laoreet lectus sit amet nunc volutpat, et commodo metus convallis. Fusce eget sem
                vestibulum, interdum tortor sit amet, tincidunt ipsum.
                Vivamus a est ege met nunc volutpat, et commodo metus convallis. Fusce eget sem
                vestibulum, interdum tortor sit amet, tincidunt ipsum.
                <br /><br />
                Vivamus a est eget lectus semper consequat. Nullam ullamcorper tortor vitae neque hendrerit, a
                iaculis dolor bibendum. Quisque eu convallis risus. In eget ante vitae arcu semper scelerisque.
                Donec laoreet lectus sit amet nunc volutpat, et commodo metus convallis. Fusce eget sem
                vestibulum, interdum tortor sit amet, tincidunt ipsum.
                Vivamus a est eget lectus semper consequat. Nullam ullamcorper tortor vitae neque hendrerit, a
                iaculis dolor bibendum. Quisque eu convallis risus. In eget ante vitae arcu semper scelerisque.
                Donec laoreet lectus sit amet nunc volutpat, et commodo metus convallis. Fusce eget sem
                vestibulum, interdum tortor sit amet, tincidunt ipsum.
                
                Vivamus a est eget lectus semper consequat. Nullam ullamcorper tortor vitae neque hendrerit, a
                iaculis dolor bibendum. Quisque eu convallis risus. In eget ante vitae arcu semper scelerisque.
                Donec laoreet lectus sit amet nunc volutpat, et commodo metus convallis. Fusce eget sem
                vestibulum, interdum tortor sit amet, tincidunt ipsum.
                Vivamus a est eget lectus semper consequat. Nullam ullamcorper tortor vitae neque hendrerit, a
                iaculis dolor bibendum. Quisque eu convallis risus. In eget ante vitae arcu semper scelerisque.
                Donec laoreet lectus sit amet nunc volutpat, et commodo metus convallis. Fusce eget sem
                vestibulum, interdum tortor sit amet, tincidunt ipsum.
            </p>
            <Link to="/web-projects/react/the-post"> <strong>Go back to home</strong> </Link>
        </div> 
    </>
  );
};

export default AboutPage;
