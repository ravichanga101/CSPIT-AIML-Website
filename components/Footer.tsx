import { config, links } from '@/lib/config';
import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <div className="text-center center-block">
                        <p className="txt-railway text-center">- Follow us @ Social Media -</p>
                        <a href="https://www.facebook.com/profile.php?id=61555053276330" target="_blank"><i className="fa fa-facebook-square fa-3x social"></i></a>
                        <a href="https://www.instagram.com/aiml_cspit/" target="_blank"><i className="fa fa-instagram fa-3x social"></i></a>
                    </div>
                    <div className="copyright">
                        &copy; Copyright <strong>CHARUSAT</strong>. All Rights Reserved
                    </div>
                </div>
            </footer>

            <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
        </>
    );
}
