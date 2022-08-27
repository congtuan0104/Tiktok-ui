import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    const renderMenu = () => {
        return current.data.map((item, index) => (
            <MenuItem key={index} item={item} onClick={() => changeMenu(item)} />
        ));
    };

    const changeMenu = (item) => {
        if (!!item.children) {
            setHistory((prev) => [...prev, item.children]);
        }
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-container')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
                {history.length > 1 && <Header title={current.header} onBack={handleBack} />}
                {renderMenu()}
            </PopperWrapper>
        </div>
    );

    // Reset menu to first page
    const resetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <div>
            <Tippy
                interactive
                offset={[12, 8]}
                delay={[0, 500]}
                hideOnClick="false"
                placement="bottom-end"
                render={renderResult}
                onHide={resetMenu}
            >
                {children}
            </Tippy>
        </div>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
};

export default Menu;
