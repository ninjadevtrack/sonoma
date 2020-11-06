import React from 'react';
import { render } from '@testing-library/react';
import ProductOverview from '.';

const ProductProps = {
    id: 'doctors-without-borders-face-coverings-set-of-2-d9946',
    name: 'Doctors Without Borders Face Coverings (Set of 2)',
    links: {
        www:
            'https://www.westelm.com/products/doctors-without-borders-face-coverings-set-of-2-d9946/',
    },
    price: {
        regular: 24,
        selling: 24,
    },
    thumbnail: {
        size: 'm',
        meta: '',
        alt: '',
        rel: 'thumbnail',
        width: 363,
        href:
            'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202043/0001/doctors-without-borders-face-coverings-set-of-2-3-m.jpg',
        height: 363,
    },
    hero: {
        size: 'm',
        meta: '',
        alt: '',
        rel: 'hero',
        width: 363,
        href:
            'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202043/0001/doctors-without-borders-face-coverings-set-of-2-3-m.jpg',
        height: 363,
    },
    images: [
        {
            size: 'm',
            meta: '',
            alt: '',
            rel: 'althero',
            width: 363,
            href:
                'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202043/0001/doctors-without-borders-face-coverings-set-of-2-1-m.jpg',
            height: 363,
        },
        {
            size: 'm',
            meta: '',
            alt: '',
            rel: 'althero',
            width: 363,
            href:
                'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202043/0001/doctors-without-borders-face-coverings-set-of-2-m.jpg',
            height: 363,
        },
    ],
};

test('<ProductOverview /> renders correctly', () => {
    const { getByText } = render(<ProductOverview {...ProductProps} />);
    expect(getByText('Add To Cart'));
});
