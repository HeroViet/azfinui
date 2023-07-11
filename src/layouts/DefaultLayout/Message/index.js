import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Message.module.scss';
import classNames from 'classnames/bind';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { faCircleInfo, faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Message() {
    const [mountIcon, setMountIcon] = useState(true);

    return (
        <div className={cx('Message-container')}>
            <div className={cx('Message-wrapper')}>
                {mountIcon && (
                    <div
                        className={cx('Message-icon')}
                        onClick={() => {
                            setMountIcon(false);
                        }}
                        style={{ backgroundImage: 'url(https://widget.oncustomer.asia/images/icon-chat-white.png)' }}
                    />
                )}
                {!mountIcon && (
                    <div className={cx('Message-box')}>
                        <div className={cx('Message-box-panel')}>
                            <div className={cx('Message-box-panel-info')}>
                                <FontAwesomeIcon icon={faCircleInfo} />
                            </div>
                            <div
                                className={cx('Message-box-panel-close')}
                                onClick={() => {
                                    setMountIcon(true);
                                }}
                            >
                                <FontAwesomeIcon icon={faXmark} />
                            </div>
                        </div>
                        <div className={cx('Message-box-home')}>
                            <div className={cx('Message-box-home-header')}>
                                <div className={cx('Message-box-home-header-title')}>Xin chào</div>
                                <div className={cx('Message-box-home-header-content')}>
                                    AzFin xin chào bạn. Xin bạn cho biết chúng tôi có thể phục vụ gì cho bạn.
                                </div>
                            </div>
                            <div className={cx('Message-box-home-body')}>
                                <div className={cx('Message-box-home-body-inbox')}>
                                    <div>Hãy bắt đầu trò chuyện</div>
                                    <div>Chúng tôi thường trả lời ngay khi được hỏi</div>
                                    <div>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div>
                                        <button>Hội thoại mới</button>
                                    </div>
                                </div>
                                <div className={cx('Message-box-home-body-answer')}></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Message;
