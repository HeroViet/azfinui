import Header from '../components/Header';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Footer from '../components/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className="w-screen flex justify-center lg:w-[117rem] mt-24 ">{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
