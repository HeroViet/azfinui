import styles from './FolderTitle.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function FolderTitle({ data, author = false }) {
    return (
        <div className="flex justify-center w-full mb-12">
            <h1 className="">
                {!author ? (
                    <span className={cx('text-default')}>THƯ MỤC:</span>
                ) : (
                    <span className={cx('text-default')}>TÁC GIẢ:</span>
                )}
                <span className={cx('text-data')}>{data}</span>
            </h1>
        </div>
    );
}

export default FolderTitle;
