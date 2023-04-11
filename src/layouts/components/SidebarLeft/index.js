import styles from './SidebarLeft.module.scss';
import classNames from 'classnames/bind';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { DATA_GLOBAL } from '~/components/assets/datas';

const cx = classNames.bind(styles);
// const heightScreen = window.screen.;

export const DATA_SIDEBAR = DATA_GLOBAL.filter((data) => data.kind.includes('SIDEBAR_LEFT'));
function SidebarLeft() {
    const sidebarContainer = useRef(null);
    // const [heightSidebar, setHeightSidebar] = useState(0);
    // useEffect(() => {
    //     const handleHeightScroll = () => {
    //         setHeightSidebar(sidebarContainer.current.offsetHeight);
    //         if (window.scrollY === heightSidebar + 672) {
    //             sidebarContainer.current.style.position = 'fixed';
    //         }
    //         // let topbarHeight = topbarElement.offsetHeight;
    //     };

    //     window.addEventListener('scroll', handleHeightScroll);
    // }, [heightSidebar]);
    return (
        <div className={cx('sidebarleft-over', 'w-full lg:w-[70.94%] pr-8 pl-8 sm:pr-0 sm:pl-0 lg:pr-20')}>
            <div ref={sidebarContainer} className={cx('sidebarleft-container')}>
                {DATA_SIDEBAR.map((content, index) => {
                    const postLength = content.posts.length;
                    let arr = [];
                    for (let i = 1; i <= 5; i++) {
                        arr.push(postLength - i);
                    }
                    return (
                        <section key={index} className={cx('wrapper')}>
                            <div className={cx('left-title')}>
                                <h3>
                                    <Link to={content.href}>{content.title}</Link>
                                </h3>
                            </div>
                            <div className={cx('posts')}>
                                <div className={cx('post-left', 'w-full md:w-1/2 mb-12 md:mb-0')}>
                                    <Link
                                        to={content.posts[arr[0]].href}
                                        style={{
                                            backgroundImage: content.posts[arr[0]].image,
                                        }}
                                        className={cx('post-left-image')}
                                    >
                                        {''}
                                    </Link>
                                    <div className={cx('post-left-content')}>
                                        <div className={cx('post-left-title')}>
                                            <h3>
                                                <Link to={content.posts[arr[0]].href}>
                                                    {content.posts[arr[0]].title}
                                                </Link>
                                            </h3>
                                        </div>
                                        <div className={cx('post-left-note')}>
                                            <span>
                                                bởi{' '}
                                                <Link
                                                    className={cx('post-left-note-author')}
                                                    to={content.posts[arr[0]].author.href}
                                                >
                                                    {content.posts[arr[0]].author.name}
                                                </Link>
                                            </span>
                                            <span>{content.posts[arr[0]].date}</span>
                                        </div>
                                        <div className={cx('post-left-direction')}>
                                            {content.posts[arr[0]].direction}
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('post-right', 'w-full md:w-1/2')}>
                                    {arr.map((number, index) => {
                                        if (index > 0) {
                                            return (
                                                <div key={index} className={cx('post-right-element')}>
                                                    <Link
                                                        to={content.posts[number].href}
                                                        style={{
                                                            backgroundImage: content.posts[number].image,
                                                        }}
                                                        className={cx('post-right-image')}
                                                    >
                                                        {}
                                                    </Link>

                                                    <div className={cx('post-right-title')}>
                                                        <h3>
                                                            <Link to={content.posts[number].href}>
                                                                {content.posts[number].title}
                                                            </Link>
                                                        </h3>
                                                        <div className={cx('post-right-date')}>
                                                            <span>{content.posts[number].date}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        } else return '';
                                    })}
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>
        </div>
    );
}

export default SidebarLeft;
