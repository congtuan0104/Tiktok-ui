import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img className={cx('avatar')} src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360" alt="" />
            <div className={cx('info')}>
                <span className={cx('name')}>Nguyễn Văn A</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                <p className={cx('username')}>nguyenvana.2000</p>
            </div>
        </div>
    );
}

export default AccountItem;
