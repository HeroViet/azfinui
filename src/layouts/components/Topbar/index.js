import styles from './Topbar.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedin, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { DATA_NEWS, DATA_SOCIALS } from '~/components/assets/datas';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const DATA_NAV_TOPBAR = [
    {
        id: 1,
        title: 'Đăng nhập',
        href: 'https://azfin.vn/wp-login.php?azdn&redirect=false',
    },
    {
        id: 2,
        title: 'Mở tài khoản',
        href: '#',
    },
    {
        id: 3,
        title: 'Giao dịch trực tuyến',
        href: '#',
    },
    {
        id: 4,
        title: 'Quản lý tài sản',
        href: '#',
    },
];

function Topbar({ heightOffset }) {
    const [count, setCount] = useState(0);
    const divNewsList = useRef();
    const topbarList = [];

    useEffect(() => {
        const handleHeightScroll = () => {
            const topbarElement = document.getElementById('topbar-id');
            let topbarHeight = topbarElement.offsetHeight;
            heightOffset(topbarHeight);
        };

        window.addEventListener('scroll', handleHeightScroll);
    }, []);

    const handlePrevTopbar = () => {
        setCount((prev) => prev - 1);
        // divNewsList.current.style.transform = `translateY(${-y * 32}px)`;
    };
    const handleNextTopbar = () => {
        setCount((prev) => prev + 1);
        // divNewsList.current.style.transform = `translateY(${-y * 32}px)`;
    };
    useLayoutEffect(() => {
        if (count >= DATA_NEWS.length * 3) {
            setCount(0);
        } else if (count < 0) {
            setCount(DATA_NEWS.length * 3 - 1);
        }
        divNewsList.current.style.transform = `translateY(${-count * 32}px)`;
    }, [count]);
    // setInterval(() => {
    //     setCount((prev) => prev + 1);
    // }, 4000);

    DATA_NEWS.map((item) => {
        return item.item.map((item) => {
            let itemData = {
                content: item.content,
                href: item.href,
            };
            return topbarList.push(itemData);
        });
    });
    let lengthTopbarList = topbarList.length;
    return (
        <div
            id="topbar-id"
            className={cx(
                'topbar-container',
                'w-screen h-[98px] sm:h-[79px]  md:h-[121px]  xl:h-[32px] flex justify-center pt-0 pb-0 md:pt-6 md:pb-[8px] xl:pt-0 xl:pb-0',
            )}
        >
            <div className={cx('topbar-wrapper', 'flex flex-col  w-[117rem] xl:justify-between xl:flex-row ')}>
                <div className={cx('topbar-left', 'flex flex-col xl:flex-row')}>
                    <div className={cx('topbar-news', 'hidden md:flex')}>
                        <div className={cx('topbar-news-title')}>NỔI BẬT</div>
                        <div className={cx('topbar-news-chevron')}>
                            <FontAwesomeIcon icon={faChevronLeft} onClick={handlePrevTopbar} />
                            <FontAwesomeIcon icon={faChevronRight} onClick={handleNextTopbar} />
                        </div>
                        <div className={cx('topbar-news-list')}>
                            <div
                                className={cx('topbar-news-list-wrapper')}
                                ref={divNewsList}
                                style={{ height: `${lengthTopbarList * 32}px` }}
                            >
                                {topbarList.map((item, index) => {
                                    return (
                                        <Link to={item.href} key={index} className={cx('topbar-news-list-item')}>
                                            {item.content}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={cx('topbar-socials')}>
                        <a href={DATA_SOCIALS.facebook.href} className={cx('topbar-socials-icon')}>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href={DATA_SOCIALS.linkedin.href}>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href={DATA_SOCIALS.youtube.href}>
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                        <a href={DATA_SOCIALS.tiktok.href}>
                            <FontAwesomeIcon icon={faTiktok} />
                        </a>
                    </div>
                </div>
                <div className={cx('topbar-navs')}>
                    {DATA_NAV_TOPBAR.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.href}>{item.title}</Link>
                            </li>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Topbar;
