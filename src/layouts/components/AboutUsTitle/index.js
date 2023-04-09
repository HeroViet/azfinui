import styles from './AboutUsTitle.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AboutUsTitle({ title }) {
    return (
        <div className={cx('title-wrapper')}>
            <div className={cx('title-body')}>
                <h3 className={cx('title-text')}>{title}</h3>
            </div>
        </div>
    );
}

export default AboutUsTitle;
