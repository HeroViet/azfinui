import styles from './MenuBar.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faXmark } from '@fortawesome/free-solid-svg-icons';
import image from '~/components/assets/images';
import { NAV_ITEMS } from '../Header';
import { DATA_SOCIALS } from '~/components/assets/datas';
import { Fragment, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useDelayUnmount from '~/components/useDelayUnmount';
import { faFacebookF, faLinkedin, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function MenuBar({ number }) {
    const [clickNavBar, setClickNavBar] = useState(false);
    const [keyIndex, setKeyIndex] = useState('');
    const [isClose, setIsClose] = useState(true);
    const shouldRenderChild = useDelayUnmount(clickNavBar, 500);
    const handleClose = (event) => {
        // event.stopPropagation();
        setIsClose(false);
    };
    const undisplay = { display: 'none', opacity: '0', x: 360, scaleX: 0 };
    const display = { display: 'block', opacity: '1', x: 0, scaleX: 1 };
    const mountedStyle = {
        // opacity: 1,
        visibility: 'visible',
        transform: 'rotateX(0deg)',
        transition: 'all .5s linear',
    };
    const unmountedStyle = {
        visibility: 'hidden',
        // opacity: 0,
        transform: 'rotateX(90deg)',
        transformOrigin: '0 0',
        transition: 'all .5s linear',
    };

    const dataPopulars = [
        {
            id: 1,
            title: 'Giới thiệu Cộng đồng "Tích sản Cổ phiếu – Tự do tài chính"',
            image: 'url(https://azfin.vn/wp-content/uploads/2021/12/Facebook-Promotiont-Tich-san-CP-263x175.jpg)',
            url: '#',
        },
        {
            id: 2,
            title: 'AFS – "hố tử thần" trong BCTC Công ty chứng khoán',
            image: 'url(https://azfin.vn/wp-content/uploads/2022/07/cac-chi-tieu-tai-chinh-cua-doanh-nghiep-263x175.png)',
            url: '#',
        },
        {
            id: 3,
            title: 'Giới thiệu Cộng đồng "Tích sản Cổ phiếu – Tự do tài chính"',
            image: 'url(https://azfin.vn/wp-content/uploads/2021/12/Facebook-Promotiont-Tich-san-CP-263x175.jpg)',
            url: '#',
        },
        {
            id: 4,
            title: 'AFS – "hố tử thần" trong BCTC Công ty chứng khoán',
            image: 'url(https://azfin.vn/wp-content/uploads/2022/07/cac-chi-tieu-tai-chinh-cua-doanh-nghiep-263x175.png)',
            url: '#',
        },
        {
            id: 5,
            title: 'Giới thiệu Cộng đồng "Tích sản Cổ phiếu – Tự do tài chính"',
            image: 'url(https://azfin.vn/wp-content/uploads/2021/12/Facebook-Promotiont-Tich-san-CP-263x175.jpg)',
            url: '#',
        },
        {
            id: 6,
            title: 'AFS – "hố tử thần" trong BCTC Công ty chứng khoán',
            image: 'url(https://azfin.vn/wp-content/uploads/2022/07/cac-chi-tieu-tai-chinh-cua-doanh-nghiep-263x175.png)',
            url: '#',
        },
    ];
    const dataFooter = '@2021 - Bản quyền nội dung thuộc về ';

    useEffect(() => {
        setIsClose(true);
    }, [number]);

    return (
        <Fragment>
            {isClose && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={cx('modal')}
                    style={isClose ? display : undisplay}
                >
                    <div className={cx('modal-overlay')} onClick={handleClose}></div>
                </motion.div>
            )}
            <AnimatePresence>
                {isClose && (
                    <motion.div
                        className={cx('wrapper')}
                        initial={{ opacity: 0, x: 360 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 360 }}
                    >
                        <motion.span whileHover={{ y: -5, rotate: 180 }} className={cx('close')} onClick={handleClose}>
                            <FontAwesomeIcon icon={faXmark} className={cx('icon')} />
                        </motion.span>
                        <div className={cx('logo')}>
                            <a href="/">
                                <img title="Azfin" src={image.logo} />
                            </a>
                        </div>
                        <div className={cx('nav')}>
                            {NAV_ITEMS.map((item, index) => {
                                if (item.types)
                                    return (
                                        <div key={index} className={cx('nav-list')}>
                                            <div className={cx('nav-item')}>
                                                <a href={item.href}>{item.title}</a>
                                                {!clickNavBar && (
                                                    <FontAwesomeIcon
                                                        className={cx('nav-icon')}
                                                        icon={faChevronDown}
                                                        onClick={() => {
                                                            setKeyIndex(index);
                                                            return setClickNavBar(!clickNavBar);
                                                        }}
                                                    />
                                                )}
                                                {clickNavBar && keyIndex !== index && (
                                                    <FontAwesomeIcon
                                                        className={cx('nav-icon')}
                                                        icon={faChevronDown}
                                                        onClick={() => {
                                                            setKeyIndex(index);
                                                            return setClickNavBar(!clickNavBar);
                                                        }}
                                                    />
                                                )}
                                                {clickNavBar && keyIndex === index && (
                                                    <FontAwesomeIcon
                                                        className={cx('nav-icon')}
                                                        icon={faChevronUp}
                                                        onClick={() => {
                                                            setKeyIndex(index);
                                                            return setClickNavBar(!clickNavBar);
                                                        }}
                                                    />
                                                )}
                                            </div>
                                            {keyIndex === index && shouldRenderChild && (
                                                <div
                                                    style={clickNavBar ? mountedStyle : unmountedStyle}
                                                    className={cx('nav-sub')}
                                                >
                                                    {item.types.map((item, index) => {
                                                        return (
                                                            <li key={index}>
                                                                <a href={item.href}>{item.item}</a>
                                                            </li>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    );

                                if (!item.types) {
                                    return (
                                        <div key={index} className={cx('nav-contact')}>
                                            <a href="#">LIÊN HỆ</a>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                        <div className={cx('content')}>
                            <h4 className="mb-12">POPULAR POSTS</h4>
                            <ul className={cx('popular-list', 'flex', 'flex-wrap')}>
                                {dataPopulars.map((dataPopular, index) => {
                                    const bgImage = { backgroundImage: dataPopular.image };
                                    const classEven = 'relative basis-3/6 mb-12 pr-4';
                                    const classOdd = 'relative basis-3/6 mb-12 pl-4';
                                    return (
                                        <li key={index} className={index % 2 === 0 ? classEven : classOdd}>
                                            <span className={index % 2 === 1 ? 'absolute left-6' : 'absolute left-2'}>
                                                {dataPopular.id}
                                            </span>
                                            <div style={bgImage} className={cx('popular-image')}>
                                                <a href={dataPopular.url} />
                                            </div>
                                            <a href={dataPopular.url} className={cx('popular-title')}>
                                                {dataPopular.title}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <footer className={cx('footer')}>
                            <div className={cx('footer-content')}>
                                {dataFooter}
                                <a className={cx('footer-azfin')} href="#">
                                    AzFin
                                </a>
                                <br />
                                <p>
                                    <a
                                        href="https://www.dmca.com/Protection/Status.aspx?ID=463b1d0b-5767-4c19-8d47-03c48912f92c&refurl=https://azfin.vn/"
                                        title="DMCA.com Protection Status"
                                    >
                                        <img
                                            src="https://images.dmca.com/Badges/dmca-badge-w150-5x1-01.png?ID=463b1d0b-5767-4c19-8d47-03c48912f92c"
                                            alt="DMCA.com Protection Status"
                                        />
                                    </a>
                                </p>
                            </div>
                            <div className={cx('footer-nav-social')}>
                                <a href={DATA_SOCIALS.facebook.href} alt="Facebook Azfin">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a href={DATA_SOCIALS.linkedin.href} alt="Linkedin Azfin">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href={DATA_SOCIALS.youtube.href} alt="Youtube Azfin">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                                <a href={DATA_SOCIALS.tiktok.href} alt="Tiktok Azfin">
                                    <FontAwesomeIcon icon={faTiktok} />
                                </a>
                            </div>
                        </footer>
                    </motion.div>
                )}
            </AnimatePresence>
        </Fragment>
    );
}

export default MenuBar;
