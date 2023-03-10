import { FC } from 'react';

import sprite from 'images/sprite.svg';

import s from './GetSvg.module.scss';

interface GetSvgProps {
    name: string;
    className?: string;
}

const GetSvg: FC<GetSvgProps> = ({ name, className = 'defaultSvg' }) => {
    return (
        <svg className={s[className]}>
            <use href={sprite + `#${name}`} />
        </svg>
    );
};

export default GetSvg;