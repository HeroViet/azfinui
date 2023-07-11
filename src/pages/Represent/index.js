import Sidebar from '~/layouts/components/Sidebar';
import styles from './Represent.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { DATA_GLOBAL, DATA_NEWS, DATA_SOCIALS } from '~/components/assets/datas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeart, faMinus } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// // import 'swiper/components/scrollbar/scrollbar.scss';

const cx = classNames.bind(styles);

function Represent() {
    const [mount, isMount] = useState(true);
    const an = 'Ẩn';
    const hien = 'Hiện';

    return (
        <div className="flex flex-wrap flex-col lg:flex-row w-screen sm:w-[48rem] md:w-[72.6rem] lg:w-[94rem] xl:w-[117rem]">
            <div className={cx('News-represent', 'w-full lg:w-[70.94%] pr-8 pl-8 sm:pr-0 sm:pl-0 lg:pr-20')}>
                <div className={cx('News-represent-header')}>
                    <h4>
                        <Link to="/azfinui/AzfinNews">Tin tức Azfin</Link>
                    </h4>
                    <h1>Điểm tin chứng khoán ngày 02/03/2023</h1>
                    <div className={cx('News-represent-direction')}>
                        <span>
                            {' Viết bởi '}
                            <Link tp="/azfinui/khoidang">Khoi Dang</Link>
                        </span>
                        <span>02/03/2023</span>
                    </div>
                </div>
                <div className={cx('list-container')} style={mount ? { width: '75%' } : { width: '25%' }}>
                    <p>
                        Mục lục bài viết
                        <span>
                            [
                            <span
                                className={cx('list-amount')}
                                onClick={() => {
                                    isMount(!mount);
                                }}
                            >
                                {mount ? an : hien}
                            </span>
                            ]
                        </span>
                    </p>
                    {mount && (
                        <div className={cx('list-content')}>
                            <li>
                                <a href="#muc-1">1. Điểm tin chứng khoán vĩ mô:</a>
                                <ul className={cx('list-content-children')}>
                                    <li>
                                        <a href="#muc-1-1">
                                            – Mỹ: Lượng đơn hàng mới đối với tư liệu sản xuất tăng mạnh nhất trong 5
                                            tháng
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#muc-1-2">
                                            – Lãi vay đang “ăn hết” lợi nhuận của doanh nghiệp, tiếp cận vốn vẫn là bài
                                            toán khó
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#muc-1-3">
                                            – Mexico giảm thuế chống bán phá giá với thép mạ nhập khẩu từ Việt Nam xuống
                                            mức thấp
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#muc-2">2. Điểm tin chứng khoán về kênh cổ phiếu:</a>
                            </li>
                            <li>
                                <a href="#muc-3">3. Điểm tin chứng khoán về kênh tài sản khác</a>
                            </li>
                        </div>
                    )}
                </div>
                <p className={cx('News-title')}>
                    <i>
                        Kính mời các quý anh chị nhà đầu tư cùng <Link to="/">AzFin</Link> điểm qua những điểm tin chính
                        về tình hình diễn biến tài chính kinh tế, chứng khoán trước giờ giao dịch hôm nay ngày
                        02/03/2023.
                    </i>
                </p>
                <div className={cx('News-one')}>
                    <h2 id="muc-1">1. Điểm tin chứng khoán vĩ mô:</h2>
                    <h3 id="muc-1-1">– Mỹ: Lượng đơn hàng mới đối với tư liệu sản xuất tăng mạnh nhất trong 5 tháng</h3>
                    <p>
                        Lượng đơn đặt hàng mới đối với các tư liệu sản xuất chủ chốt do Mỹ sản xuất đã tăng mạnh nhất
                        trong 5 tháng vào tháng 01/2022, khi lượng xuất khẩu các mặt hàng cốt lõi tăng trở lại. Điều này
                        cho thấy chi tiêu của các doanh nghiệp cho các loại thiết bị đã gia tăng vào đầu quý 1 năm nay.
                    </p>
                    <p>
                        {' '}
                        Christopher Rupkey, nhà kinh tế trưởng tại công ty nghiên cứu thị trường tài chính FWDBONDS ở
                        New York, cho biết:” Các đơn đặt hàng mua thiết bị mới của doanh nghiệp là một chỉ số quan trọng
                        về đầu tư vào tương lai của nền kinh tế và được coi là một tin tốt vào đầu năm.
                    </p>
                    <p>
                        Các đơn đặt hàng sẽ bị hủy nếu các công ty bị giảm doanh thu và doanh số bán hàng, và đó không
                        phải là những gì dữ liệu đang thể hiện, ngay cả khi nhiều nhà lãnh đạo doanh nghiệp đang chuẩn
                        bị cho cuộc suy thoái vào cuối năm nay.
                    </p>
                    <p>
                        Các đơn đặt hàng tư liệu sản xuất phi quốc phòng, không bao gồm máy bay, là một chỉ báo được
                        theo dõi chặt chẽ cho các kế hoạch chi tiêu doanh nghiệp. Con số này đã tăng 0,8% trong tháng
                        1/2023, sau khi giảm 0,3% trong tháng 12/2022. Các nhà kinh tế được Reuters thăm dò đã dự báo
                        rằng lượng đơn đặt hàng tư liệu sản xuất cốt lõi sẽ tăng 0,1% trong tháng 1/2023, so với mức
                        tăng của cùng kỳ năm ngoái là 5,3%.
                    </p>
                    <p>
                        <i>
                            {'=>>>'} Một mặt, số liệu đơn đặt hàng mới đối với các tư liệu sản xuất chủ chốt do Mỹ sản
                            xuất tăng mạnh nhất trong 5 tháng vào T1/2022 cho thấy một bức tranh lạc quan về triển vọng
                            của nền kinh tế lớn nhất thế giới. Mặt khác, chuỗi dữ liệu tích cực đó khiến một phần nhà
                            đầu tư lo lắng rằng Cục dự trữ Liên bang Mỹ (Fed) có thể tăng lãi suất lên mức cao hơn so
                            với ước tính hiện tại.
                        </i>
                    </p>

                    <div>
                        <h3 id="muc-1-2">
                            – Lãi vay đang “ăn hết” lợi nhuận của doanh nghiệp, tiếp cận vốn vẫn là bài toán khó
                        </h3>
                        <p>
                            Sau động thái điều chỉnh lãi suất huy động, mới đây, nhiều ngân hàng trong đó có cả ngân
                            hàng quốc doanh và các ngân hàng tư nhân đều đồng loạt thông báo giảm lãi suất và tung ra
                            các gói vay hỗ trợ cho sản xuất kinh doanh. Đây được đánh giá là một động thái tích cực
                            trong bối cảnh lãi suất ở mức cao trong thời gian qua. Tuy nhiên, mặc dù lãi suất giảm nhưng
                            việc tiếp cận các gói vay này vẫn là lo lắng của nhiều doanh nghiệp.
                        </p>
                        <p>
                            <strong>Lãi suất chỉ thấp ở kỳ đầu:</strong> Nhiều chương trình giảm lãi suất ở các ngân
                            hàng đưa ra là ưu đãi lãi suất ở những kỳ đầu tiên, sau đó lãi suất sẽ được điều chỉnh cộng
                            theo biên độ (thường 3 tháng một lần) sẽ lên mức rất cao.
                        </p>
                        <p>
                            <strong>Lãi vay “ăn hết” lợi nhuận của doanh nghiệp”:</strong> ông Phạm Văn Việt, Phó chủ
                            tịch hội Dệt may thêu đan TP HCM, cho biết các doanh nghiệp rất cần vay vốn trong dịp đầu
                            năm để hoạt động nhưng nhiều quy định cho vay siết chặt hơn cũng như lãi suất lên cao trong
                            khi ngành dệt may vẫn đang sụt giảm đơn hàng từ 30 – 40% và lợi nhuận trên từng đơn hàng
                            cũng lao dốc.
                        </p>
                        <p>
                            <strong> Điều kiện vay vốn làm khó người vay:</strong> Nhiều doanh nghiệp cũng nêu khó khăn
                            trong việc thế chấp tài sản là đất nông nghiệp, đất tại các tỉnh, thành khác ngoài TP.HCM.
                            Cụ thể, ngân hàng thường định giá thấp và xét duyệt hồ sơ khó khăn, phải mất 1,5-2 tháng mới
                            hoàn thành hồ sơ.
                        </p>
                        <p>
                            ={'>>>'} Có thể thấy, khó khăn của các doanh nghiệp đều sản xuất ở thời điểm hiện tại là lợi
                            nhuận mang lại từ sản xuất đang không thể bù đắp được cho lãi suất đi vay của ngân hàng hiện
                            nay, kể cả khi ngân hàng giảm lãi suất bởi 3 vấn đề chính: (1): lãi suất chỉ thấp ở thời kỳ
                            đầu; (2): lãi vay “ăn mòn” lợi nhuận và (3): điều kiện vay vốn phức tạp.
                        </p>
                        <h3 id="muc-1-3">
                            – Mexico giảm thuế chống bán phá giá với thép mạ nhập khẩu từ Việt Nam xuống mức thấp
                        </h3>
                        <p>
                            Cục Phòng vệ Thương Mại (Bộ Công Thương) cho biết, Cơ quan Thực thi Ngoại thương (UPCI)
                            thuộc Bộ Kinh tế Mexico đã ban hành kết luận cuối cùng của vụ việc điều tra chống bán phá
                            giá (CBPG) với thép mạ nhập khẩu từ Việt Nam, theo đó, mức thuế được điều chỉnh giảm so với
                            kết luận sơ bộ.
                        </p>
                        <p>
                            Vụ việc được Mexico khởi xướng từ cuối T8/2021 dựa trên đơn kiện của ngành sản xuất trong
                            nước. Ngày 14/09/2022. UPCI đã ban hành kết luận sơ bộ với mức thuế chống bán phá giá áp
                            dụng cho thép mạ nhập khẩu từ Việt Nam là 0%- 12.34%.
                        </p>
                        <p>
                            Trong suốt quá trình diễn ra sự việc, Bộ Công Thương đã phối hợp với Đại sứ quán Việt Nam
                            tại Mexico thông qua các kênh khác nhau để bày tỏ quan điểm và đề nghị Mexico không sử dụng
                            phương pháp tính toán bất lợi cho các doanh nghiệp xuất khẩu Việt Nam.
                        </p>
                        <p>
                            Trong bối cảnh các sản phẩm của Việt Nam đang được hưởng thuế suất ưu đãi 0% khi xuất khẩu
                            sang Mexico theo cam kết của Hiệp định đối tác Toàn diện và Tiến bộ xuyên Thái Bình Dương
                            (CPTPP), Mexico là thị trường xuất khẩu thép mạ tiềm năng của Việt Nam.
                        </p>
                        <p>
                            <i>
                                ={'>>>'} Việc UPCI giảm thuế trong kết luận cuối cùng giúp các doanh nghiệp thép Việt
                                Nam có thể tiếp tục cạnh tranh và xuất khẩu sang Mexico. Mức thuế này cũng được đánh giá
                                là tương đối thấp so với mức thuế mà Mexico áp dụng với sản phẩm thép nói riêng và các
                                sản phẩm khác nói chung trong các vụ việc điều tra chống bán phá giá do Mexico khởi
                                xướng.
                            </i>
                        </p>{' '}
                    </div>
                </div>
                <div className={cx('News-two')}>
                    <h2 id="muc-2">2. Điểm tin chứng khoán về kênh cổ phiếu:</h2>
                    <h3>HDG: Hà Đô đặt kế hoạch lợi nhuận năm 2023 giảm 24%</h3>
                    <p>
                        Tại Hội nghị tổng kết năm 2022 diễn ra mới đây, ban lãnh đạo CTCP Tập đoàn Hà Đô (Mã: HDG) đã
                        thông qua kế hoạch sản xuất kinh doanh trong năm 2023 với các chỉ tiêu doanh thu hợp nhất đạt
                        3.040 tỷ đồng (giảm 17%), lợi nhuận sau thuế đạt 1.053 tỷ đồng (giảm gần 24% so với kế hoạch
                        thực hiện năm 2022).
                    </p>
                    <p>
                        Theo đó, doanh nghiệp tiếp tục tập trung chính vào các lĩnh vực mũi nhọn như bất động sản, năng
                        lượng và đầu tư tài chính. Trong đó, chú trọng phát triển các dự án bất động sản và năng lượng
                        trọng điểm,…
                    </p>
                    <p>
                        Trong bản tin gửi nhà đầu tư, Hà Đô cho biết, trong quý IV/2022, doanh nghiệp đã bàn giao 25 căn
                        tại dự án Hado Charm Villas, luỹ kế mảng bất động sản ghi nhận doanh thu 1.111 tỷ đồng chủ yếu
                        từ việc ghi nhận dự án Hado Charm Villas. Tập đoàn dự kiến sẽ tiếp tục đẩy nhanh công tác hoàn
                        thiện xây dựng tại dự án và kỳ vọng dự án Hado Charm Villas sẽ tiếp tục chiếm tỷ trọng lớn trong
                        cơ cấu doanh thu mảng bất động sản trong năm 2023.
                    </p>
                    <p>
                        Ngày 19/1/2023, công ty đã tất toán xong 210 tỷ đồng gói trái phiếu phát hành ra công chúng và
                        hiện không còn dư nợ trái phiếu. Kể từ đầu năm ngoái, bất động sản đã không còn là mảng đóng góp
                        lớn nhất cho doanh thu của tập đoàn này. Cụ thể, năm 2022, doanh thu từ mảng năng lượng (thuỷ
                        điện, điện mặt trời và điện gió) ghi nhận tăng 69% so với cùng kỳ lên 2.161 tỷ đồng. Ngược lại,
                        doanh thu kinh doanh bất động sản giảm 42% còn gần 1.143 tỷ đồng.
                    </p>
                    <p>
                        <i>
                            ={'>>>'} Một điểm tích cực đối với HDG là doanh nghiệp đã tất toán xong 210 tỷ đồng trái
                            phiếu phát hành ra công chúng và hiện không còn dư nợ trái phiếu. Trong năm 2023, việc Hà Đô
                            đặt kế hoạch lợi nhuận giảm 24% là một kế hoạch thận trọng, cho thấy ban lãnh đạo không đánh
                            giá quá tích cực triển vọng ngành bất động sản trong năm nay. Tuy vậy, HDG có thể kỳ vọng
                            vào doanh thu từ mảng năng lượng có thể bù đắp cho sự sụt giảm của mảng bất động sản
                        </i>
                    </p>
                    <div className={cx('News-two-image', 'w-full lg:w-[70.94%] ')}>
                        <img
                            src="https://azfin.vn/wp-content/uploads/2023/03/tt2-1.png"
                            alt="Kết quả kinh doanh Hà Đô"
                        />
                        <p>(Nguồn: BCTC hợp nhất các quý Hà Đô).</p>
                    </div>
                </div>
                <div className={cx('News-three')}>
                    <h2 id="muc-3">3. Điểm tin chứng khoán về kênh tài sản khác</h2>
                    <h3>Ba bài toán thị trường bất động sản cần sớm có lời giải</h3>
                    <p>
                        Đầu tiên, vướng mắc pháp lý được cho là chiếm đến 70% khó khăn của các doanh nghiệp bất động
                        sản. Theo thống kê của Bộ xây dựng, cả nước hiện còn hơn 1.000 dự án vướng mắc về pháp lý, nếu
                        được tháo gỡ khó khăn sẽ tạo nguồn cung đáng kể cho thị trường bất động sản.
                    </p>
                    <p>
                        Vấn đề thứ hai là cung-cầu thị trường. Số liệu từ Bộ xây dựng chỉ ra, năm 2022, nguồn cung bất
                        động sản khan hiếm, cơ cấu sản phẩm nhà ở nghiêng về phân khúc nhà ở trung- cao cấp, nhà ở cho
                        người thu nhập thấp thiếu hụt trầm trọng. Vấn đề lệch pha cung-cầu trên thị trường bất động sản
                        đã được nói đến từ nhiều năm nay nhưng vẫn chưa có sự cải thiện. Đây là một trong những nguyên
                        nhân khiến giá nhà bị đẩy lên cao, sức mua giảm. Nhất là trong bối cảnh thị trường đang “khát”
                        thanh khoản như hiện nay, nếu không có những sản phẩm với mức giá phù hợp sẽ rất khó kích cầu.
                        Minh chứng là trong thời gian vừa qua, một số chủ đầu tư đã đưa ra các chính sách chiết khấu lên
                        đến 30-40%.
                    </p>
                    <p>
                        Vấn đề cuối cùng là nguồn vốn. Theo số liệu của Ngân hàng nhà nước, giai đoạn 2017-2019 (trước
                        khi xảy ra dịch COVID-19), tín dụng đối với bất động sản tăng trưởng trên 20%/năm, cao hơn mức
                        độ tăng trưởng tín dụng chung của nền kinh tế (13-14%) và giữ tỷ trọng 18-19% tổng dư nợ tín
                        dụng nền kinh tế. Giai đoạn 2020-2021, dưới tác động của đại dịch, dư nợ tín dụng bất động sản
                        vẫn có sự tăng trưởng, tuy nhiên ở mức thấp hơn những năm trước (năm 2020 tăng 12.06%, năm 2021
                        tăng 15.37%).
                    </p>
                    <p>
                        Tính đến cuối năm 2022, dư nợ tín dụng vào lĩnh vực này đạt khoảng 2,58 triệu tỷ đồng, tăng
                        khoảng 24,27% so với cuối năm 2021. Đây là một trong những lĩnh vực tăng trưởng cao nhất và
                        chiếm tỷ trọng lớn với 21,2% tổng dư nợ đối với nền kinh tế. Trong cơ cấu này, trên 60% là tín
                        dụng cho nhu cầu nhà ở, đáng nói ở đây là chủ yếu là phân khúc giá trị cao, còn hơn 30% là cho
                        vay đối với nhu cầu kinh doanh bất động sản (cho vay chủ đầu tư). Tín dụng ngân hàng xưa nay vẫn
                        là nguồn vốn lớn nhất đổ vào bất động sản. Do đó, ngay khi các nhà băng thực hiện thắt chặt các
                        điều kiện cho vay, cộng với đó là kênh trái phiếu bị “tắc” đã khiến ngành này ngay lập tức rơi
                        vào cảnh khó khăn.
                    </p>
                    <p>
                        <i>
                            ={'>>>'} Pháp lý, lệch pha cung cầu và nguồn tín dụng không được cấp đối với những chủ địa
                            ốc không đáp ứng được yêu cầu vay vốn đang là 3 vấn đề nổi cộm của ngành bất động sản, sẽ
                            quyết định khả năng phục hồi và hướng phát triển trong tương lai của ngành này.
                        </i>
                    </p>
                    <div className={cx('News-three-image', 'w-full lg:w-[70.94%]')}>
                        <img
                            src="https://azfin.vn/wp-content/uploads/2023/03/tt1.png"
                            alt="Nguồn cung bất động sản 2022"
                        />
                        <p>(Nguồn: Bộ Xây dựng).</p>
                    </div>
                </div>
                <div className={cx('News-more')}>
                    <span>Xem thêm: </span>
                    <Link to="/azfinui/represent">Điểm tin chứng khoán ngày 01/03/2023</Link>
                </div>
                <p>________</p>
                <div>Xem thêm các dịch vụ khác của AzFin: </div>
                <div className={cx('News-more-list')}>
                    <li>
                        <FontAwesomeIcon icon={faMinus} />
                        Fanpage AzFin Việt Nam:{' '}
                        <a href={DATA_SOCIALS.facebook}>https://www.facebook.com/AzFinVietNam</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faMinus} />
                        Youtube: <a href={DATA_SOCIALS.youtube}>https://www.youtube.com/c/azfinvietnam</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faMinus} />
                        Tham khảo các khóa học của AzFin: <a href={DATA_SOCIALS.academy}>https://academy.azfin.vn/</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faMinus} />
                        Khoá học đọc vị cổ phiếu: <a href={DATA_SOCIALS.academy}>https://docvicophieu.azfin.vn/</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faMinus} />
                        Khoá học chinh phục cổ phiếu ngân hàng:{' '}
                        <a href="#!">https://chinhphuccophieunganhang.azfin.vn/</a>
                    </li>
                </div>
                <div className={cx('News-nav')}>
                    {DATA_GLOBAL.map((item, index) => {
                        return (
                            <Link to={item.href} key={index}>
                                {item.title}
                            </Link>
                        );
                    })}
                </div>
                <div className={cx('News-item-social', 'flex justify-center')}>
                    <div className={cx('News-item-icons')}>
                        <span className={cx('News-item-icon')}>
                            <FontAwesomeIcon icon={faHeart} />
                        </span>
                        <Link to="#" className={cx('News-item-icon')}>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </Link>
                        <Link to="#" className={cx('News-item-icon')}>
                            <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                        <Link to="#" className={cx('News-item-icon')}>
                            <FontAwesomeIcon icon={faPinterest} />
                        </Link>
                        <Link to="#" className={cx('News-item-icon')}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </Link>
                    </div>
                </div>
                <div className={cx('author-properties')}>
                    <div className={cx('author-image')}>
                        <img
                            alt="Khoi Dang"
                            src="https://secure.gravatar.com/avatar/a6144f591ace05c598d15e0365ccc0cf?s=100&d=mm&r=g"
                        />
                    </div>
                    <div className={cx('author-content')}>
                        <h5>KHOI DANG</h5>
                    </div>
                </div>
                <div className={cx('News-pagination')}>
                    <div className={cx('News-pagination-prev')}>
                        <div>
                            <span>Bài trước</span>
                        </div>
                        <Link to="/azfinui/represent">Điểm tin chứng khoán ngày 01/03/2023</Link>
                    </div>
                    <div className={cx('News-pagination-next')}>
                        <div>
                            <span>Bài tiếp theo</span>
                        </div>
                        <Link to="/azfinui/represent">Điểm tin chứng khoán ngày 03/03/2023</Link>
                    </div>
                </div>
                <div className={cx('News-swiper-title')}>
                    <h4>BÀI VIẾT LIÊN QUAN</h4>
                </div>
                <Swiper
                    modules={(Navigation, EffectFade, Pagination)}
                    navigation
                    pagination
                    effect={'fade'}
                    speed={800}
                    slidesPerView={3}
                    loop
                    spaceBetween={20}
                    className={cx('News-swiper')}
                    id="News-swiper-id"
                >
                    <SwiperSlide>
                        <div className="w-full h-auto">
                            <Link
                                to="/azfinui/represent"
                                style={{
                                    backgroundImage: DATA_NEWS[5].item[0].image,
                                }}
                                className={cx('news-item-image')}
                            >
                                {''}
                            </Link>
                        </div>
                        <div className={cx('News-swiper-slide-title')}>
                            <h3>
                                <Link to="/azfinui/represent">{DATA_NEWS[5].item[0].title}</Link>
                            </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full h-auto">
                            <Link
                                to="/azfinui/represent"
                                style={{
                                    backgroundImage: DATA_NEWS[5].item[1].image,
                                }}
                                className={cx('news-item-image')}
                            >
                                {''}
                            </Link>
                        </div>
                        <div className={cx('News-swiper-slide-title')}>
                            <h3>
                                <Link to="/azfinui/represent">{DATA_NEWS[5].item[1].title}</Link>
                            </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full h-auto">
                            <Link
                                to="/azfinui/represent"
                                style={{
                                    backgroundImage: DATA_NEWS[5].item[2].image,
                                }}
                                className={cx('news-item-image')}
                            >
                                {''}
                            </Link>
                        </div>
                        <div className={cx('News-swiper-slide-title')}>
                            <h3>
                                <Link to="/azfinui/represent">{DATA_NEWS[5].item[2].title}</Link>
                            </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full h-auto">
                            <Link
                                href="/azfinui/represent"
                                style={{
                                    backgroundImage: DATA_NEWS[5].item[0].image,
                                }}
                                className={cx('news-item-image')}
                            >
                                {''}
                            </Link>
                        </div>
                        <div className={cx('News-swiper-slide-title')}>
                            <h3>
                                <Link to="/azfinui/represent">{DATA_NEWS[5].item[0].title}</Link>
                            </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full h-auto">
                            <Link
                                href="/azfinui/represent"
                                style={{
                                    backgroundImage: DATA_NEWS[5].item[1].image,
                                }}
                                className={cx('news-item-image')}
                            >
                                {''}
                            </Link>
                        </div>
                        <div className={cx('News-swiper-slide-title')}>
                            <h3>
                                <Link to="/azfinui/represent">{DATA_NEWS[5].item[1].title}</Link>
                            </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full h-auto">
                            <Link
                                href="/azfinui/represent"
                                style={{
                                    backgroundImage: DATA_NEWS[5].item[2].image,
                                }}
                                className={cx('news-item-image')}
                            >
                                {''}
                            </Link>
                        </div>
                        <div className={cx('News-swiper-slide-title')}>
                            <h3>
                                <Link to="/azfinui/represent">{DATA_NEWS[5].item[2].title}</Link>
                            </h3>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <Sidebar />
        </div>
    );
}

export default Represent;
