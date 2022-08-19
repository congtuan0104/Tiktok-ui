import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faEllipsisVertical,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const [input, setInput] = useState();

    useEffect(() => {
        if (searchResult.length > 0) setSearchResult([1, 2, 3]);
    }, [searchResult.length]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="" tiktok-logo />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className="box" tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Tài khoản</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <form action="/search" className={cx('search-bar')}>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            autoComplete="off"
                            name="q"
                            placeholder="Tìm kiếm tài khoản và video"
                            spellCheck={false}
                        ></input>

                        <button
                            type="button"
                            className={cx('btn-clear')}
                            onClick={() => setInput('')}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <span></span>
                        <button type="submit" className={cx('btn-search')}>
                            <img src={images.search} alt="search" />
                        </button>
                    </form>
                </Tippy>
                <div className={cx('action-bar')}>
                    <Button outline>
                        <FontAwesomeIcon icon={faPlus} />
                        &nbsp;Tải lên
                    </Button>
                    <Button primary>Đăng nhập</Button>
                    <i className={cx('options')}>
                        <FontAwesomeIcon width="30" icon={faEllipsisVertical} />
                    </i>
                </div>
            </div>
        </div>
    );
}

export default Header;
