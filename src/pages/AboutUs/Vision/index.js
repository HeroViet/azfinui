import styles from './Vision.module.scss';
import classNames from 'classnames/bind';
import AboutUsTitle from '~/layouts/components/AboutUsTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faStreetView, faUsers } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Vision() {
    return (
        <div>
            <AboutUsTitle title="TẦM NHÌN & SỨ MỆNH" />
            <div className={cx('vision-container')}>
                <div className={cx('vision-wrapper')}>
                    <div className={cx('mission', 'w-full md:w-1/3')}>
                        <img src="https://azfin.vn/wp-content/uploads/2022/06/h2.png" alt="Sứ mệnh" />
                        <FontAwesomeIcon icon={faPaperPlane} />
                        <h3>SỨ MỆNH</h3>
                        <p>
                            Cung cấp giải pháp tài chính cá nhân, gia đình từ A - Z cho người Việt Nam. <br />
                            Định hướng đầu tư đúng đắn, quản lý tài sản thông minh và hướng đến Tự do tài chính.{' '}
                        </p>
                    </div>
                    <div className={cx('vision', 'w-full md:w-1/3')}>
                        <img
                            src="https://azfin.vn/wp-content/uploads/2022/06/anrh-daif-2-1-1170x663.jpg"
                            alt="Tầm nhìn"
                        />
                        <FontAwesomeIcon icon={faStreetView} />
                        <h3>TẦM NHÌN</h3>
                        <p>
                            Trở thành công ty tài chính uy tín <br /> trong lĩnh vực cung cấp giải pháp tài chính <br />{' '}
                            cá nhân và gia đình toàn diện.
                        </p>
                    </div>
                    <div className={cx('core', 'w-full md:w-1/3')}>
                        <img src="https://azfin.vn/wp-content/uploads/2022/06/h3.png" alt="Giá trị cốt lõi" />
                        <FontAwesomeIcon icon={faUsers} />
                        <h3>GIÁ TRỊ CỐT LÕI</h3>
                        <p>
                            Minh bạch và khách quan - Tận tâm và tin cậy. AzFin cố gắng mang lại những giá trị tốt nhất
                            đến cho khách hàng.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vision;
