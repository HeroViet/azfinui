import styles from './NewsItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function NewsItem({ datas, item }) {
    return (
        <li className={cx('news-item-wrapper', 'flex flex-col md:flex-row')}>
            <div className="w-full md:w-[46.25%] h-auto">
                <a
                    href={datas.href || datas.posts[item].href}
                    style={{ backgroundImage: datas.image || datas.posts[item].image }}
                    className={cx('news-item-image')}
                >
                    {''}
                </a>
            </div>
            <div className={cx('news-item-content', 'w-full md:w-[53.75%] pl-0 md:pl-12')}>
                <a href={datas.hrefParent || datas.href} className={cx('news-item-content-kind')}>
                    {datas.titleParent || datas.title}
                </a>
                <h2 className={cx('news-item-content-title')}>
                    <a href={datas.href || datas.posts[item].href}>{datas.title || datas.posts[item].title}</a>
                </h2>
                <div className={cx('news-item-note')}>
                    <span>
                        bởi{' '}
                        <a
                            className={cx('news-item-note-author')}
                            href={datas.author?.href || datas.posts[item].author.href}
                        >
                            {datas.author?.name || datas.posts[item].author.name}
                        </a>
                    </span>
                    <span>{datas.date || datas.posts[item].date}</span>
                </div>
                <div className={cx('news-item-direction')}>
                    <p>{datas.direction || datas.posts[item].direction}</p>
                </div>
                <div className={cx('news-item-social', 'flex justify-center')}>
                    <div className={cx('news-item-icons')}>
                        <span className={cx('news-item-icon')}>
                            <FontAwesomeIcon icon={faHeart} />
                        </span>
                        <a href="/represent" className={cx('news-item-icon')}>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="/represent" className={cx('news-item-icon')}>
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="/represent" className={cx('news-item-icon')}>
                            <FontAwesomeIcon icon={faPinterest} />
                        </a>
                        <a href="/represent" className={cx('news-item-icon')}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default NewsItem;
