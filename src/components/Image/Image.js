import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import images from '~/assets/images';

function Image({ src, alt, ...props }, ref) {
    const [fallback, setFallback] = useState('');
    return (
        <img
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={() => setFallback(images.noImage)}
        />
    );
}

forwardRef(Image).propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
};

export default forwardRef(Image);
