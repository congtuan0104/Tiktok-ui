import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './DefaultLayout.module.scss';
import Header from '../components/Header';
import Sidebar from './Sidebar';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <Sidebar />
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
        </>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
