import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    onClick = () => {},
    children,
    disabled = false,
    primary = false,
    outline = false,
    rounded = false,
    size = 'medium',
    className,
    ...passProps
}) {
    let Tag = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        delete props.onClick;
    }

    if (to) {
        props.to = to;
        Tag = Link;
    } else if (href) {
        props.href = href;
        Tag = 'a';
    }

    const classes = cx('wrapper', size, {
        [className]: className,
        primary,
        outline,
        rounded,
        disabled,
    });

    return (
        <Tag className={classes} {...props}>
            <span>{children}</span>
        </Tag>
    );
}

export default Button;
