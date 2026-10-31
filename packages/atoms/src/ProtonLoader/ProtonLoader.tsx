import type { ComponentPropsWithoutRef } from 'react';

import clsx from '@proton/utils/clsx';

import './ProtonLoader.scss';

export enum ProtonLoaderType {
    Default = 'default',
    Negative = 'negative',
}

export interface ProtonLoaderProps extends ComponentPropsWithoutRef<'svg'> {
    type?: ProtonLoaderType;
}

const defaultColors = {
    fill: '#6D4AFF',
    stopColor: '#FFFFFF',
    stopColor2: '#6D4BFD',
};

const negativeColors = {
    fill: '#FFFFFF',
    stopColor: '#6D4AFF',
    stopColor2: '#FFFFFF',
};

export const ProtonLoader = ({ className, type = ProtonLoaderType.Default, ...rest }: ProtonLoaderProps) => {
    const colors = type === 'negative' ? negativeColors : defaultColors;
    const logoId = `p-logo-${type}`;
    const lightGradientId = `p-light-gradient-${type}`;
    const lightMaskId = `p-light-mask-${type}`;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            fill="none"
            viewBox="0 0 56 56"
            aria-hidden="true"
            className={clsx(['w-custom', className])}
            style={{ '--w-custom': '10em' }}
            {...rest}
        >
            <path
                id={logoId}
                fill={colors.fill}
                fillRule="evenodd"
                d="M10 0h36a10 10 0 0 1 10 10v36a10 10 0 0 1-10 10H10A10 10 0 0 1 0 46V10A10 10 0 0 1 10 0zM15.75 12.25v31.5H42v-7H23.625v-5.25H39.375v-7H23.625v-5.25H42v-7z"
            />
            <mask id={lightMaskId} style={{ maskType: 'alpha' }}>
                <use href={`#${logoId}`} />
            </mask>
            <g mask={`url(#${lightMaskId})`}>
                <circle className="proton-loader-light" cx="40" cy="-52" r="50" fill={`url(#${lightGradientId})`} />
            </g>
            <defs>
                <radialGradient id={lightGradientId}>
                    <stop stopColor={colors.stopColor} stopOpacity=".5" />
                    <stop stopColor={colors.stopColor} stopOpacity="0" offset="1" />
                </radialGradient>
            </defs>
        </svg>
    );
};
