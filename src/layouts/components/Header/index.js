import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import image from '~/components/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Nav from '../Nav';
import { Fragment, useEffect, useState } from 'react';
import MenuBar from '../MenuBar';
import Topbar from '../Topbar';

const cx = classNames.bind(styles);

export const NAV_ITEMS = [
    {
        title: 'VỀ CHÚNG TÔI',
        href: '#',
        types: [
            { item: 'LỊCH SỬ HÌNH THÀNH', href: '/@history' },
            { item: 'TẦM NHÌN & SỨ MỆNH', href: '/@vision' },
            { item: 'SƠ ĐỒ TỔ CHỨC', href: '/@diagram' },
            { item: 'TIN TỨC AZFIN', href: '/@azfinnews' },
        ],
    },
    {
        title: 'SẢN PHẨM',
        href: '#',
        types: [
            { item: 'ĐÀO TẠO CHỨNG KHOÁN', href: '#' },
            { item: 'ĐÀO TẠO TÀI CHÍNH - AZTALENT', href: '#' },
            { item: 'TÍCH SẢN CỔ PHIẾU', href: '#' },
            { item: 'TƯ VẤN DOANH NGHIỆP', href: '#' },
        ],
    },
    {
        title: 'KIẾN THỨC ĐẦU TƯ',
        href: '#',
        types: [
            { item: 'TIN TỨC HÀNG NGÀY', href: '/@newsday' },
            { item: 'THÔNG TIN KINH TẾ VÀ ĐẦU TƯ', href: '/@information' },
            { item: 'KIẾN THỨC CƠ BẢN', href: '/@basics' },
        ],
    },
    {
        title: 'TRUNG TÂM PHÂN TÍCH',
        href: '#',
        types: [
            { item: 'CỔ PHIẾU DANH MỤC TÍCH SẢN', href: '#' },
            { item: 'PHÂN TÍCH CỔ PHIẾU CHUYÊN SÂU', href: '#' },
            { item: 'PHÂN TÍCH VĨ MÔ', href: '#' },
            { item: 'BÁO CÁO CHIẾN LƯỢC', href: '#' },
        ],
    },
    {
        title: 'AZFIN CHANNEL',
        href: '#',
        types: [
            { item: 'AZFIN ACADEMY', href: '#' },
            { item: 'KÊNH YOUTUBE', href: '#' },
            { item: 'FANPAGE', href: '#' },
        ],
    },
    {
        title: 'LIÊN HỆ',
        href: '/@contact',
    },
];

function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const [number, setNumber] = useState(0);
    const [topbarHeight, setTopbarHeight] = useState(0);

    const handleHeightOffset = (height) => {
        setTopbarHeight(height);
    };

    useEffect(() => {
        const handleScroll = () => {
            // console.log('ScrollY:', window.scrollY);
            const headerElement = document.getElementById('header-id');
            if (window.scrollY >= topbarHeight) {
                headerElement.classList.add('header-fixed');
            } else {
                headerElement.classList.remove('header-fixed');
            }
        };

        window.addEventListener('scroll', handleScroll);
    }, [topbarHeight]);

    useEffect(() => {
        console.log(topbarHeight);
    }, [topbarHeight]);

    return (
        <Fragment>
            <Topbar heightOffset={handleHeightOffset} />
            <div className={cx('header-container')} id="header-id">
                <div className={cx('wrapper', 'w-screen sm:w-[48rem] md:w-[72.6rem] lg:w-[94rem] xl:w-[117rem]')}>
                    <nav className={cx('inner')}>
                        <button
                            className={cx('header-menu-button', 'lg:hidden')}
                            onClick={() => {
                                setOpenMenu(true);
                                setNumber((prev) => prev + 1);
                                console.log(number);
                            }}
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                        <div className={cx('logo-default')}>
                            <a href="/">
                                <img src={image.logo} alt="AzFin Việt Nam" />
                            </a>
                        </div>
                        <Nav items={NAV_ITEMS} nav />
                        <button
                            className={cx('header-menu-button')}
                            onClick={() => {
                                setOpenMenu(true);
                                setNumber((prev) => prev + 1);
                                console.log(number);
                            }}
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </nav>
                </div>
            </div>
            {openMenu && number > 0 && <MenuBar number={number} />}
        </Fragment>
    );
}

export default Header;
