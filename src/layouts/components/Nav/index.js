import styles from './Nav.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Nav({ items }) {
    return (
        <div className={cx('wrapper', 'nav', 'hidden lg:block')}>
            {items.map((item, index) => {
                if (item.types)
                    return (
                        <div key={index} className={cx('nav-list', ' mr-[1.6rem] xl:mr-12')}>
                            <div className={cx('nav-item')}>
                                <Link to={item.href}>{item.title}</Link>
                                <FontAwesomeIcon className={cx('nav-icon')} icon={faChevronDown} />
                            </div>
                            <div className={cx('nav-sub')}>
                                {item.types.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Link to={item.href}>{item.item}</Link>
                                        </li>
                                    );
                                })}
                            </div>
                        </div>
                    );
                if (!item.types) {
                    return (
                        <div key={index} className={cx('nav-contact')}>
                            <Link to={item.href}>LIÊN HỆ</Link>
                        </div>
                    );
                }
            })}
        </div>
    );
}

export default Nav;
