import { useState, useEffect, useRef } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import * as searchServices from '~/services/search';
import { useDebounced } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    const [input, setInput] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounced(input, 500);

    useEffect(() => {
        setLoading(true);
        setShowResult(false);
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            setLoading(false);
            return;
        }

        const fetchAPI = async () => {
            const result = await searchServices.search(debouncedValue, 'less');
            setSearchResult(result);
            setLoading(false);
            setShowResult(true);
        };

        fetchAPI();
    }, [debouncedValue]);

    const inputRef = useRef();

    const handleInput = (e) => {
        const inputValue = e.target.value;
        if (inputValue.startsWith(' ')) return;
        setInput(e.target.value);
    };

    const handleClear = () => {
        setSearchResult([]);
        setInput('');
        inputRef.current.focus();
    };

    return (
        <div>
            <Tippy
                interactive
                visible={showResult && searchResult.length > 0}
                onClickOutside={() => setShowResult(false)}
                render={(attrs) => (
                    <div className={cx('search-container')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Tài khoản</h4>
                            {searchResult.map((account) => (
                                <AccountItem data={account} key={account.id} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
            >
                <form action="/search" className={cx('search-bar')}>
                    <input
                        ref={inputRef}
                        value={input}
                        onChange={(e) => handleInput(e)}
                        onFocus={() => setShowResult(true)}
                        autoComplete="off"
                        name="q"
                        placeholder="Tìm kiếm tài khoản và video"
                        spellCheck={false}
                    />

                    {!!input && !loading && (
                        <button type="button" className={cx('btn-clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <span></span>
                    <button type="submit" className={cx('btn-search')}>
                        <SearchIcon />
                    </button>
                </form>
            </Tippy>
        </div>
    );
}

export default Search;
