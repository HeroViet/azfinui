import Sidebar from '../Sidebar';
import FolderTitle from '../FolderTitle';
import NewsItem from '../NewsItem';
import { useState } from 'react';
import styles from './Author.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Author({ datas }) {
    const [count, setCount] = useState(0);

    const postLength = datas.length;
    const arrAll = [];
    let arr = [];
    for (let i = 1; i <= postLength; i++) {
        arr.push(postLength - i);
        if (arr.length === 8) {
            arrAll.push(arr);
            arr = [];
        }
    }
    if (arr.length) {
        arrAll.push(arr);
    }
    return (
        <div className="flex flex-wrap flex-col lg:flex-row w-screen sm:w-[48rem] md:w-[72.6rem] lg:w-[94rem] xl:w-[117rem]">
            <div className="w-full lg:w-[70.94%] pr-8 pl-8 sm:pr-0 sm:pl-0 lg:pr-20">
                <FolderTitle data={datas[0].author.name} author />
                <div className={cx('author-properties')}>
                    <div className={cx('author-image')}>
                        <img
                            alt={datas[0].author.name}
                            src="https://secure.gravatar.com/avatar/a6144f591ace05c598d15e0365ccc0cf?s=100&d=mm&r=g"
                        />
                    </div>
                    <div className={cx('author-content')}>
                        <h5>{datas[0].author.name}</h5>
                    </div>
                </div>
                {/* <div></div> */}
                <div>
                    {arrAll[count].map((item, index) => {
                        return <NewsItem datas={datas[item]} key={index} />;
                    })}
                </div>
                <div className="flex">
                    {arrAll.map((item, index) => {
                        return (
                            <li
                                key={index}
                                style={
                                    index === count
                                        ? {
                                              backgroundColor: '#fd9e2b',
                                              color: '#eeeeee',
                                          }
                                        : {}
                                }
                                className={cx('news-page')}
                                onClick={(e) => {
                                    e.target.classList.add('active');
                                    setCount(index);
                                }}
                            >
                                <a href="#default">{index + 1}</a>
                            </li>
                        );
                    })}
                </div>
            </div>
            <Sidebar />
        </div>
    );
}

export default Author;
