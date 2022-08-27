import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css';

import {
    faEllipsisVertical,
    faPlus,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import config from '~/config';

import styles from './Header.module.scss';
import images from '~/assets/images';

import Button from '~/components/Button';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        children: {
            header: 'Ngôn ngữ',
            data: [
                {
                    code: 'vi',
                    content: 'Tiếng Việt',
                    children: {
                        header: 'Vùng miền',
                        data: [
                            {
                                code: 'n',
                                content: 'Miền Nam',
                            },
                            {
                                code: 't',
                                content: 'Miền Trung',
                            },
                            {
                                code: 'b',
                                content: 'Miền Bắc',
                            },
                        ],
                    },
                },
                {
                    code: 'en',
                    content: 'English',
                },
                {
                    code: 'vi',
                    content: 'Tiếng Việt',
                    children: {
                        header: 'Vùng miền',
                        data: [
                            {
                                code: 'n',
                                content: 'Miền Nam',
                            },
                            {
                                code: 't',
                                content: 'Miền Trung',
                            },
                            {
                                code: 'b',
                                content: 'Miền Bắc',
                            },
                        ],
                    },
                },
                {
                    code: 'en',
                    content: 'English',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt',
    },
];

const USER_MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Xem hồ sơ',
        to: '/profile',
    },
    {
        icon: <FontAwesomeIcon icon={faTiktok} />,
        title: 'Nhận xu',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Cài đặt',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Đăng xuất',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const [currentUser, setCurrentUser] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="tiktok-logo" />
                </Link>
                <Search />
                <div className={cx('action-bar')}>
                    {currentUser ? (
                        <>
                            <Button outline>
                                <FontAwesomeIcon icon={faPlus} />
                                &nbsp;Tải lên
                            </Button>
                            <Tippy content="Tin nhắn">
                                <button className={cx('btn-message')}>
                                    <img src={images.message} alt="Tin nhắn" />
                                </button>
                            </Tippy>
                            <Tippy content="Hộp thư">
                                <button className={cx('btn-envelope')}>
                                    <img src={images.envelope} alt="Tin nhắn" />
                                </button>
                            </Tippy>
                            <Menu items={USER_MENU_ITEMS}>
                                <Image
                                    className={cx('user-avatar')}
                                    src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360"
                                    alt=""
                                />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button outline>
                                <FontAwesomeIcon icon={faPlus} />
                                &nbsp;Tải lên
                            </Button>
                            <Button primary onClick={() => setCurrentUser(true)}>
                                Đăng nhập
                            </Button>

                            <Menu items={MENU_ITEMS}>
                                <i className={cx('options')}>
                                    <FontAwesomeIcon width="30" icon={faEllipsisVertical} />
                                </i>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
