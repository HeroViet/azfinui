import styles from './News.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useLayoutEffect, useState } from 'react';
import { DATA_NEWS } from '~/components/assets/datas';

const cx = classNames.bind(styles);

function News() {
    const [count, setCount] = useState(0);
    const [widthNewsWrapper, setWidthNewsWrapper] = useState(0);
    const [widthNews, setWidthNews] = useState(0);
    const [divNewsWrapper, setDivNewsWrapper] = useState([]);

    const handlePrevNews = () => {
        let x = count - 1;
        if (x >= DATA_NEWS.length) {
            x = 0;
        } else if (x < 0) {
            x = DATA_NEWS.length - 1;
        }
        setCount((prev) => prev - 1);
        divNewsWrapper.style.transform = `translate(${-x * widthNews}px)`;
    };
    const handleNextNews = () => {
        let x = count + 1;
        if (x >= DATA_NEWS.length) {
            x = 0;
        } else if (x < 0) {
            x = DATA_NEWS.length - 1;
        }
        setCount((prev) => prev + 1);
        divNewsWrapper.style.transform = `translateX(${-x * widthNews}px)`;
    };
    useLayoutEffect(() => {
        if (count >= DATA_NEWS.length) {
            setCount(0);
        } else if (count < 0) {
            setCount(DATA_NEWS.length - 1);
        }
    }, [count]);

    // useEffect(() => {
    const handleNewsLoaded = () => {
        const wrapperLists = document.querySelectorAll('.News_news-wrapper-list__ri4j3');
        const newsContainer = document.getElementById('news-id');
        const newsWrapper = document.querySelector('.News_news-wrapper__UTf2C');
        // const btnLeft = document.getElementById('news-prev');
        // const btnRight = document.getElementById('news-next');
        setDivNewsWrapper(newsWrapper);
        let widthNewsContainer = newsContainer.offsetWidth;
        setWidthNewsWrapper(widthNewsContainer * wrapperLists.length);
        setWidthNews(widthNewsContainer);
    };

    window.addEventListener('load', handleNewsLoaded);
    // }, []);

    // setInterval(() => {
    //     setCount(count + 1);
    //     let x = count + 1;
    //     if (x >= DATA_NEWS.length) {
    //         x = 0;
    //     } else if (x < 0) {
    //         x = DATA_NEWS.length - 1;
    //     }
    //     setCount((prev) => prev + 1);
    //     divNewsWrapper.style.transform = `translateX(${-x * widthNews}px)`;
    // }, 5000);

    return (
        <div
            className={cx(
                'news-container',
                'w-screen md:w-[72.6rem] h-[70rem] sm:w-[48rem] lg:w-[94rem] lg:h-[50rem] xl:w-[117rem]',
            )}
            id="news-id"
        >
            <div className={cx('news-wrapper')} style={{ width: widthNewsWrapper }}>
                {DATA_NEWS.map((items, index) => {
                    return (
                        <div
                            key={index}
                            className={cx(
                                'news-wrapper-list',
                                'w-screen md:w-[72.6rem] h-[70rem] sm:w-[48rem] lg:w-[94rem] lg:h-[50rem] xl:w-[117rem]',
                            )}
                        >
                            {items.item.map((item, index) => {
                                return (
                                    <div key={index} className={cx(item.name)}>
                                        <a
                                            className={cx('news-image')}
                                            href={item.href}
                                            title={item.title}
                                            style={{ backgroundImage: item.image }}
                                        >
                                            {''}
                                        </a>
                                        <div className={cx('news-slide-overlay')}>
                                            <div className={cx('news-content')}>
                                                <h3>
                                                    <a
                                                        className={cx('news-content-text')}
                                                        title={item.title}
                                                        href={item.href}
                                                    >
                                                        {item.content}
                                                    </a>
                                                </h3>
                                                <div className={cx('news-content-direction')}>
                                                    <span>
                                                        {'bởi '}
                                                        <a href={item.author.href}>{item.author.name}</a>
                                                    </span>
                                                    <span>{item.date}</span>
                                                    <span>
                                                        <a href={item.comment.href}>{item.comment.amount}</a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>

            <div className={cx('next', 'w-screen md:w-[72.6rem] lg:w-[94rem] xl:w-[117rem] h-0')}>
                <div
                    className={cx('next-left', 'absolute top-[-350px] lg:top-[-250px] translate-y-[-50%]')}
                    id="news-prev"
                    onClick={handlePrevNews}
                >
                    <FontAwesomeIcon className={cx('icon')} icon={faChevronLeft} />
                </div>
                <div
                    id="news-next"
                    className={cx('next-right', 'absolute top-[-350px] lg:top-[-250px] translate-y-[-50%]')}
                    onClick={handleNextNews}
                >
                    <FontAwesomeIcon className={cx('icon')} icon={faChevronRight} />
                </div>
            </div>
        </div>
    );
}

export default News;
