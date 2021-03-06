import * as React from 'react';

import {Icon} from '../index';

import styles from './button.module.scss';

interface Props {
    text: string;
    className?: any;
    icon?: string;
    iconColor?: string;
    mod?: string;
    fileType?: boolean;
    onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
    onChange?(event: React.FormEvent<HTMLInputElement>): void;
}

const Button: React.SFC<Props> = props => {
    const isIcon = () => {
        if (typeof props.icon !== 'undefined') {
            return true;
        } else {
            return false;
        }
    };

    const btnComponent = () => {
        return (
            <button
                className={`${styles.button} ${props.className} ${styles[props.mod]}`}
                onClick={props.onClick}
                onChange={props.onChange}
            >
                <span>{props.text}</span>
                {isIcon() ? <Icon name={props.icon} color={props.iconColor} /> : null}
            </button>
        );
    };

    const fileBtnComponent = () => {
        return (
            <label className={`${styles.button} ${styles.fileButton} ${props.className} ${styles[props.mod]}`}>
                <input type="file" onClick={props.onClick} onChange={props.onChange} />
                <span>{props.text}</span>
                {typeof props.icon !== 'undefined' ? <Icon name={props.icon} /> : null}
            </label>
        );
    };

    return props.fileType ? fileBtnComponent() : btnComponent();
};

Button.defaultProps = {
    className: null,
    mod: 'primary',
    fileType: false,
} as Partial<Props>;

export default Button;
