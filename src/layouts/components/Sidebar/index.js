import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import { DATA_SIDEBAR } from '../SidebarLeft';
import { faFacebookF, faLinkedin, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { DATA_SOCIALS } from '~/components/assets/datas';

const cx = classNames.bind(styles);

const DATA_SIDEBAR_LIST = [
    { title: 'Câu hỏi thường gặp', href: '/@generalPost' },
    { title: 'Chứng khoán TV', href: '/@generalPost' },
    { title: 'Giới thiệu về TSCP', href: '/@generalPost' },
    { title: 'Kiến thức cơ bản', href: '/@generalPost' },
    { title: 'Quy chế TSCP', href: '/@generalPost' },
    { title: 'Thông tin cổ phiếu', href: '/@generalPost' },
    { title: 'Thông tin kinh tế và đầu tư', href: '/@generalPost' },
    { title: 'Tin tức Azfin', href: '/@generalPost' },
    { title: 'Tin tức hàng ngày', href: '/@generalPost' },
    { title: 'Uncategorized', href: '/@generalPost', note: 'different' },
    { title: 'Tư vấn doanh nghiệp', href: '/@generalPost' },
    { title: 'Đào tạo chứng khoán', href: '/@generalPost' },
];

function Sidebar({ home = false }) {
    const postLength = DATA_SIDEBAR[0].posts.length;
    let arr = [];
    for (let i = 1; i <= 4; i++) {
        arr.push(postLength - i);
    }
    return (
        <div
            className={cx(
                'wrapper',
                'w-full md:w-[72.6rem] lg:w-[29.06%] h-auto  overflow-auto lg:overflow-scroll pr-8 pl-8 sm:pr-0 sm:pl-0',
            )}
            style={home ? { maxHeight: '1573px' } : {}}
        >
            <section className={cx('sidebar-search')}>
                <div className={cx('sidebar-search-wrapper')}>
                    <input type="text" placeholder="Điền và nhấn Enter..." />
                </div>
                <div className={cx('sidebar-search-icon')}>
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </section>
            <section className={cx('sidebar-posts')}>
                <div className={cx('sidebar-posts-wrapper')}>
                    <div className={cx('sidebar-posts-title')}>
                        <h2>Bài Viết Mới</h2>
                    </div>
                    <div className={cx('sidebar-posts-content')}>
                        {arr.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href={DATA_SIDEBAR[0].posts[item].href}>{DATA_SIDEBAR[0].posts[item].title}</a>
                                </li>
                            );
                        })}
                    </div>
                    <div className={cx('sidebar-posts-init')}>
                        <a href={DATA_SIDEBAR[0].posts[0].href}>{DATA_SIDEBAR[0].posts[0].title}</a>
                    </div>
                </div>
            </section>
            <section className={cx('sidebar-social')}>
                <div className={cx('sidebar-social-wrapper')}>
                    <div className={cx('sidebar-social-title')}>
                        <h3>KẾT NỐI CÙNG AZFIN</h3>
                    </div>
                    <div className={cx('sidebar-social-items')}>
                        <a href={DATA_SOCIALS.facebook.href} className={cx('sidebar-item')}>
                            <div className={cx('social-icon')}>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </div>
                            <span>{DATA_SOCIALS.facebook.title}</span>
                        </a>

                        <a href={DATA_SOCIALS.linkedin.href} className={cx('sidebar-item')}>
                            <div className={cx('social-icon')}>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </div>
                            <span>{DATA_SOCIALS.linkedin.title}</span>
                        </a>

                        <a href={DATA_SOCIALS.youtube.href} className={cx('sidebar-item')}>
                            <div className={cx('social-icon')}>
                                <FontAwesomeIcon icon={faYoutube} />
                            </div>
                            <span>{DATA_SOCIALS.youtube.title}</span>
                        </a>

                        <a href={DATA_SOCIALS.tiktok.href} className={cx('sidebar-item')}>
                            <div className={cx('social-icon')}>
                                <FontAwesomeIcon icon={faTiktok} />
                            </div>
                            <span>{DATA_SOCIALS.tiktok.title}</span>
                        </a>
                    </div>
                </div>
            </section>
            <section className={cx('sidebar-tv')}>
                <div className={cx('sidebar-tv-wrapper')}>
                    <div className={cx('sidebar-tv-title')}>
                        <h3>CHỨNG KHOÁN TV</h3>
                    </div>
                    <div className={cx('sidebar-tv-list')}>
                        {arr.map((item, index) => {
                            return (
                                <div key={index} className={cx('sidebar-tv-container')}>
                                    <a
                                        href={DATA_SIDEBAR[0].posts[item].href}
                                        className={cx('sidebar-tv-image')}
                                        style={{ backgroundImage: DATA_SIDEBAR[0].posts[item].image }}
                                    >
                                        {}
                                    </a>
                                    <h4>
                                        <a href={DATA_SIDEBAR[0].posts[item].href}>
                                            {DATA_SIDEBAR[0].posts[item].title}
                                        </a>
                                    </h4>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className={cx('sidebar-list')}>
                <div className={cx('sidebar-list-wrapper')}>
                    <div className={cx('sidebar-list-title')}>
                        <h3>MỤC LỤC</h3>
                    </div>
                    <div>
                        {DATA_SIDEBAR_LIST.map((item, index) => {
                            if (!item.note) {
                                return (
                                    <li key={index} className={cx('sidebar-list-item')}>
                                        <FontAwesomeIcon icon={faChevronRight} className={cx('sidebar-list-icon')} />
                                        <a href={item.href}>{item.title}</a>
                                    </li>
                                );
                            }
                            if (item.note) {
                                return (
                                    <li key={index} className={cx('sidebar-list-item')}>
                                        <FontAwesomeIcon
                                            icon={faChevronRight}
                                            className={cx('sidebar-list-icon', 'ml-8')}
                                        />
                                        <a href={item.href}>{item.title}</a>
                                    </li>
                                );
                            } else return '';
                        })}
                    </div>
                </div>
            </section>
            <section className={cx('sidebar-google')}>
                <div className={cx('sidebar-google')}>
                    {/* <iframe src="https://cafebiz.vn/" className="h-[604px]" /> */}
                </div>
            </section>
        </div>
    );
}

export default Sidebar;
