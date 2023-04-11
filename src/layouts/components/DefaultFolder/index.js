import styles from './DefaultFolder.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '~/layouts/components/Sidebar';
import FolderTitle from '../FolderTitle';

import { useState } from 'react';
import NewsItem from '../NewsItem';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function DefaultFolder({ handlesecond = false, datas, headerTitle }) {
    const [count, setCount] = useState(0);

    const postLength = datas.posts.length;
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
        <div
            id="default"
            className="w-screen sm:w-[48rem] md:w-[72.6rem] lg:w-[94rem] xl:w-[117rem] flex flex-wrap flex-col lg:flex-row justify-center"
        >
            <div className="w-full sm:w-[480px] md:w-full lg:w-[70.94%] pr-8 pl-8 sm:p-0 lg:pr-20 my-0 mx-auto">
                <FolderTitle data={headerTitle} />
                <div className={cx('news-list')}>
                    {arrAll[count].map((item, index) => {
                        return (
                            <NewsItem key={index} datas={datas} item={item} handlesecond={handlesecond} index={index} />
                        );
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
                                <Link to="#default">{index + 1}</Link>
                            </li>
                        );
                    })}
                </div>
            </div>
            <Sidebar />
        </div>
    );
}

export default DefaultFolder;
