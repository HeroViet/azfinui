import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { DATA_SOCIALS } from '~/components/assets/datas';
import validator from 'validator';

const cx = classNames.bind(styles);

function Footer() {
    const DATA_FOOTER = {
        title: {
            line1: 'Tải App AzFin ngay để bắt đầu hành trình',
            line2: 'tích sản và đầu tư của bạn',
        },
        contact: {
            title: 'LIÊN HỆ NGAY',
            list: ['HOTLINE: 0962498539', 'EMAIL: INFO@AZFIN.VN', 'KẾT NỐI'],
        },
        profile: {
            name: 'CÔNG TY CỔ PHẦN AZFIN VIỆT NAM',
            direction:
                'AzFin Việt Nam là tổ chức chuyên về Tài chính, Chứng khoán. Chúng tôi tự tin cung cấp đến các nhà đầu tư các chương trình đào tạo Chứng khoán, Tài chính cá nhân bài bản và chuyên sâu, phù hợp với sự đa dạng nhu cầu của mọi người. Chương trình thiết kế độc đáo, thực tiễn nhất để học viên có thể ứng dụng vào thực tế hiệu quả và phù hợp nhất.',
        },
        nav: [
            { name: 'VỀ AZFIN', href: '#' },
            { name: 'BÁO CHÍ - TRUYỀN HÌNH', href: '#' },
            { name: 'TUYỂN DỤNG', href: '#' },
            { name: 'CỘNG ĐỒNG TÍCH SẢN CỔ PHIẾU', href: '#' },
            { name: 'CỘNG ĐỒNG ĐẦU TƯ CHỨNG KHOÁN THỰC CHIẾN', href: '#' },
        ],
        socialHref: {
            facebook: '#',
            linked: '#',
            youtube: '#',
            tiktok: '#',
        },
        footer: '@2021 - Bản quyền nội dung thuộc về ',
    };

    const onblur = (e) => {
        let valueElement = e.target.value;
        let errorMessage = e.target.parentElement.querySelector('.error-message');
        let isvalid = true;

        if (e.target.placeholder === 'Email*') {
            if (validator.isEmail(valueElement)) {
                isvalid = true;
            } else {
                isvalid = false;
                errorMessage.innerText =
                    valueElement.length === 0 ? 'Vui lòng nhập trường này' : 'Trường này phải là email';
            }
        } else if (e.target.placeholder === 'Số điện thoại*') {
            if (validator.isMobilePhone(valueElement)) {
                isvalid = true;
            } else {
                isvalid = false;
                errorMessage.innerText =
                    valueElement.length === 0
                        ? 'Vui lòng nhập trường này'
                        : 'Vui lòng nhập đúng định dạng số điện thoại';
            }
        } else {
            if (valueElement.trim()) {
                isvalid = true;
            } else {
                isvalid = false;
                errorMessage.innerText = 'Vui lòng nhập trường này';
            }
        }
        if (!isvalid) {
            e.target.parentElement.classList.add('invalid');
        } else {
            errorMessage.innerText = '';
            e.target.parentElement.classList.remove('invalid');
        }
    };

    const onchangeinput = (e) => {
        let errorMessage = e.target.parentElement.querySelector('.error-message');
        errorMessage.innerText = '';
        e.target.parentElement.classList.remove('invalid');
        return;
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        // let formContact = e.target.parentElement.matches('#form-main').querySelectorAll('.form-mesage .error-message');
        // let arrFormContact = Array.from(formContact).forEach((item) => {if(item.innerText) {}});
    };

    return (
        <footer className={cx('wrapper', 'mt-12 w-full')}>
            <section className={cx('footer-title')}>
                <div className={cx('footer-title-wrapper')}>
                    <div>
                        <p>{DATA_FOOTER.title.line1}</p>
                        <p>{DATA_FOOTER.title.line2}</p>
                    </div>
                </div>
            </section>
            <section className={cx('footer-apps')}>
                <div className={cx('footer-apps-wrapper')}>
                    <div className={cx('footer-apps-google', 'w-full md:w-1/2')}>
                        <img src="https://azfin.vn/wp-content/uploads/2022/10/googlestore.png" alt="Google Play" />
                    </div>
                    <div className={cx('footer-apps-appstore', 'w-full md:w-1/2')}>
                        <img src="https://azfin.vn/wp-content/uploads/2022/10/applestore.png" alt="App Store" />
                    </div>
                </div>
            </section>
            <section className={cx('footer-contact')}>
                <div id="form-main" className={cx('footer-contact-wrapper')}>
                    <div className={cx('footer-contact-title')}>
                        <p
                            onClick={(e) => {
                                console.log(e.target.parentElement);
                            }}
                        >
                            {DATA_FOOTER.contact.title}
                        </p>
                    </div>
                    <div id="form-contact" className={cx('footer-contact-todo', 'flex flex-wrap')}>
                        <div className={cx('footer-contact-name form-message w-full md:w-1/3 px-[1.4rem]')}>
                            <input
                                type="text"
                                placeholder="Họ tên*"
                                onBlur={onblur}
                                onInput={onchangeinput}
                                className="form-input"
                            />
                            <span className="error-message"></span>
                        </div>
                        <div className="footer-contact-email form-message w-full md:w-1/3 px-[1.4rem]">
                            <input
                                type="text"
                                placeholder="Email*"
                                onBlur={onblur}
                                onInput={onchangeinput}
                                className="form-input"
                            />
                            <span className="error-message"></span>
                        </div>
                        <div className="footer-contact-phone form-message w-full md:w-1/3 px-[1.4rem]">
                            <input
                                type="text"
                                placeholder="Số điện thoại*"
                                onBlur={onblur}
                                onInput={onchangeinput}
                                className="form-input"
                            />
                            <span className="error-message"></span>
                        </div>
                        <div className={cx('footer-contact-message', 'form-message', 'w-full')}>
                            <textarea
                                cols="40"
                                rows="10"
                                type="text"
                                placeholder="Phản Hồi/Nhận Xét*"
                                onBlur={onblur}
                                onInput={onchangeinput}
                                className="form-input"
                            />
                            <span className="error-message"></span>
                        </div>
                    </div>
                    <div className={cx('footer-submit')}>
                        <input
                            type="submit"
                            value="GỬI NGAY"
                            className={cx('footer-contact-submit', 'bg-cyan-50')}
                            onSubmit={handlesubmit}
                        />
                    </div>
                </div>
            </section>
            <section className={cx('footer-profile')}>
                <div className={cx('footer-profile-wrapper')}>
                    <div className={cx('footer-profile-aboutus', 'w-full md:w-1/3')}>
                        <div className="mb-8">
                            <img
                                width="194"
                                height="66"
                                src="https://azfin.vn/wp-content/uploads/2022/10/azlogo-white.png"
                                className="attachment-large size-large"
                                alt=""
                            />
                        </div>
                        <div className={cx('footer-aboutus-text')}>
                            <p>{DATA_FOOTER.profile.name}</p>
                            <br />
                            <p>{DATA_FOOTER.profile.direction}</p>
                        </div>
                    </div>
                    <div className={cx('footer-profile-nav', 'w-full md:w-1/3')}>
                        {DATA_FOOTER.nav.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href={item.href}>{item.name}</a>
                                </li>
                            );
                        })}
                    </div>
                    <div className={cx('footer-profile-social', 'w-full md:w-1/3')}>
                        <div className={cx('footer-profile-social-contact')}>
                            {DATA_FOOTER.contact.list.map((item, index) => {
                                return <li key={index}>{item}</li>;
                            })}
                        </div>
                        <div className={cx('footer-social-list')}>
                            <div className={cx('footer-social-item')}>
                                <a href={DATA_SOCIALS.facebook}>
                                    {' '}
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </div>
                            <div className={cx('footer-social-item')}>
                                <a href={DATA_SOCIALS.linkedin}>
                                    {' '}
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                            <div className={cx('footer-social-item')}>
                                <a href={DATA_SOCIALS.youtube}>
                                    {' '}
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                            </div>
                            <div className={cx('footer-social-item')}>
                                <a href={DATA_SOCIALS.tiktok}>
                                    <FontAwesomeIcon icon={faTiktok} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={cx('footer-note')}>
                <div className={cx('footer-note-wrapper')}>
                    <span>{DATA_FOOTER.footer}</span>
                    <a href="/" className="text-orange-400 ml-2">
                        {' '}
                        AzFin
                    </a>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
