import { FC } from 'react';

import sprite from 'images/swg/sprite.svg';

interface GetSvgProps {
    name: string;
    className: string;
}

const GetSvg: FC<GetSvgProps> = ({ name, className }) => {
    return (
        <svg className={className}>
            <use href={sprite + name} />
        </svg>
    );
};

// Usage: <GetIcon name="svgName" width={svgWidth} height={svgHeight} classname={svgClassName}/>
export default GetSvg;