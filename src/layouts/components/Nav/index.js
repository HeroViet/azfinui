import styles from './Nav.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Nav({ items }) {
    return (
        <div className={cx('wrapper', 'nav', 'hidden lg:block')}>
            {items.map((item, index) => {
                if (item.types)
                    return (
                        <div key={index} className={cx('nav-list', ' mr-[1.6rem] xl:mr-12')}>
                            <div className={cx('nav-item')}>
                                <a href={item.href}>{item.title}</a>
                                <FontAwesomeIcon className={cx('nav-icon')} icon={faChevronDown} />
                            </div>
                            <div className={cx('nav-sub')}>
                                {item.types.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a href={item.href}>{item.item}</a>
                                        </li>
                                    );
                                })}
                            </div>
                        </div>
                    );
                if (!item.types) {
                    return (
                        <div key={index} className={cx('nav-contact')}>
                            <a href={item.href}>LIÊN HỆ</a>
                        </div>
                    );
                }
            })}
        </div>
    );
}

export default Nav;
