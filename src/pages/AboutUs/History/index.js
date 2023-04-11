import styles from './History.module.scss';
import classNames from 'classnames/bind';
import AboutUsTitle from '~/layouts/components/AboutUsTitle';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function History() {
    return (
        <div className={cx('history-container')}>
            <AboutUsTitle title="LỊCH SỬ HÌNH THÀNH" />
            <div className={cx('content-container')}>
                <div className={cx('content-wrapper')}>
                    <div className={cx('content-image', 'w-full md:w-1/2')}>
                        <img src="https://azfin.vn/wp-content/uploads/2022/06/h2.png" />
                    </div>
                    <div className={cx('content-body', 'w-full md:w-1/2')}>
                        <div className={cx('content-text')}>
                            <p>
                                Trải qua nhiều năm trên thị trường chứng khoán, chúng tôi nhận thấy rất nhiều nhà đầu tư
                                cá nhân thua lỗ lớn chỉ vì thiếu kiến thức.
                            </p>
                            <p>
                                Vì vậy, năm 2016, chúng tôi đã̀ thành lập lên nhóm đầu tư và đào tạo chứng khoán “Trada
                                Brother” với mục tiêu phổ biến tư duy về kiến thức “đầu tư giá trị” cho tất cả các nhà
                                đầu tư Việt Nam.
                            </p>
                            <p>
                                Đến cuối năm 2019, chúng tôi nhận thấy rằng, không ít nhà đầu tư gặp tình trạng không
                                biết cách quản lý tài chính khi đầu tư. Việc bán nhà, bán xe... vì thua lỗ chứng khoán
                                đã không còn là điều gì xa lạ, đó chính là hệ lụy trực tiếp từ việc thiếu quản trị tài
                                chính khi đầu tư. Vì thế, Trada Brother đã được đổi thành AzFin Việt Nam nhằm cung cấp
                                các giải pháp tài chính tổng thể và toàn diện A-Z cho người Việt.
                            </p>
                            <p>
                                Khi Covid – 19 xảy ra, nền kinh tế chịu ảnh hưởng lớn, đại dịch là lúc tất cả mọi người
                                nhận thức rõ vai trò của tài chính cá nhân với từng cá thể và từng gia đình.
                            </p>
                            <p>
                                Điều này khiến chúng tôi quyết tâm thành lập một tổ chức về tài chính có thể hoạt động
                                chuyên nghiệp, hiệu quả và trợ giúp được nhiều người Việt Nam hơn. Cuối năm 2020, Công
                                ty Cổ phần AzFin Việt Nam chính thức được đăng ký để phục vụ mục tiêu phổ cập kiến thức
                                tài chính - đầu tư tới từng nhà, đến từng người.
                            </p>
                            <p>
                                AzFin Việt Nam tin rằng, tài chính cá nhân chính là gốc rễ của mỗi người. Tài chính vững
                                mạnh không chỉ giúp mỗi cá nhân có thể có cuộc đời hạnh phúc, tự do hơn mà còn góp phần
                                giúp cho Việt Nam trở nên hùng cường.
                            </p>
                        </div>
                        <Link to="/@contact" className={cx('content-contact')}>
                            LIÊN HỆ
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default History;
