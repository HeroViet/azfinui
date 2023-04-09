import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity, faEnvelopeOpenText, faGlobe, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div>
            <section
                className="min-h-[410px] w-screen bg-center bg-cover bg-no-repeat pt-32 pb-32 flex justify-center"
                style={{ backgroundImage: 'url(https://azfin.vn/wp-content/uploads/2022/06/4-4.jpg)' }}
            >
                <div className={cx('contact-image-wrapper', 'flex w-full')}>
                    <div className={cx('contact-image-left', 'hidden md:block md:w-[35%] lg:w-1/2')}></div>
                    <div className={cx('contact-image-right', 'w-full md:w-[65%] lg:w-1/2')}>
                        <div className={cx('contact-image-content')}>
                            <h2>Liên hệ ngay với chúng tôi </h2>
                            <p>Đội ngũ CSKH của AzFin sẽ cố gắng liên hệ với bạn 24/7 để hỗ trợ bạn nhiệt tình nhất.</p>
                        </div>
                        <div className={cx('contact-btn')}>
                            <a href="/@contact" className={cx('contact-btn-content')}>
                                LIÊN HỆ
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex justify-center">
                <div className={cx('contact-body', ' w-screen xl:w-[1210px]')}>
                    <div className=" p-8 lg:p-0 w-full flex flex-col lg:flex-row">
                        <div className={cx('contact-profile', 'w-full lg:w-1/3 m-0 lg:m-12')}>
                            <h2>Liên hệ với chúng tôi</h2>
                            <div className={cx('contact-profile-list')}>
                                <li>
                                    <span className="pr-2 text-[#00a7e1]">
                                        <FontAwesomeIcon icon={faCity} />
                                    </span>
                                    <span>Tòa nhà Luxyry Park View, 32D Dương Đình Nghệ, Cầu Giấy, Hà Nội</span>
                                </li>
                                <li>
                                    <span className="pr-2 text-[#00a7e1]">
                                        <FontAwesomeIcon icon={faPhoneFlip} />
                                    </span>
                                    <span>Phone: 0962 498 639</span>
                                </li>
                                <li>
                                    <span className="pr-2 text-[#00a7e1]">
                                        <FontAwesomeIcon icon={faGlobe} />
                                    </span>
                                    <span>Website: http://azfin.vn/​</span>
                                </li>
                                <li>
                                    <span className="pr-2 text-[#00a7e1]">
                                        <FontAwesomeIcon icon={faEnvelopeOpenText} />
                                    </span>
                                    <span>Email: azfin@info</span>
                                </li>
                            </div>
                        </div>
                        <div className={cx('contact-info', 'w-full lg:w-2/3 pt-8 lg:p-8')}>
                            <div className={cx('contact-info-heading')}>
                                <h2>Thông tin yêu cầu</h2>
                                <p>
                                    Để biết thêm các dịch vụ, sản phẩm của AzFin, xin điền thông tin liên lạc bên dưới
                                    và chúng tôi sẽ liên lạc với bạn sớm nhất.
                                </p>
                            </div>
                            <div className={cx('contact-info-btn')}>
                                <div className={cx('contact-info-todo', 'flex flex-wrap')}>
                                    <div className={cx('contact-info-name', 'w-full md:w-1/3 pr-[1.4rem]')}>
                                        <input type="text" placeholder="Name*" />
                                    </div>
                                    <div
                                        className={cx(
                                            'contact-info-email',
                                            'w-full md:w-1/3 px-[1.4rem] pl-0 md:pl-[1.4rem]',
                                        )}
                                    >
                                        <input type="text" placeholder="Email*" />
                                    </div>
                                    <div
                                        className={cx(
                                            'contact-info-phone',
                                            'w-full md:w-1/3 px-[1.4rem] pl-0 md:pl-[1.4rem]',
                                        )}
                                    >
                                        <input type="text" placeholder="Subject*" />
                                    </div>
                                    <div className={cx('contact-info-message', 'w-full')}>
                                        <textarea cols="40" rows="10" type="text" placeholder="Your Message*" />
                                    </div>
                                </div>
                                <div className={cx('contact-info-submit')}>
                                    <input
                                        type="submit"
                                        value="SUBMIT"
                                        className={cx('contact-submit', 'bg-cyan-50')}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
