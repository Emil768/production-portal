import { ChangeEvent, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    value?: T;
    onChange?: (value: T) => void;
    options: SelectOption<T>[];
    readOnly?: boolean;
    label?: string;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const { value, className, options, readOnly, onChange, label } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value as T);
        }
    };

    const optionsList = useMemo(
        () =>
            options.map((option) => {
                return (
                    <option
                        className={cls.Option}
                        value={option.value}
                        key={option.value}
                    >
                        {option.content}
                    </option>
                );
            }),
        [options],
    );

    return (
        <div className={classNames(cls.Select_wrapper, {}, [className])}>
            {label && <span>{label}</span>}
            <select
                className={cls.Select}
                value={value}
                onChange={onChangeHandler}
                disabled={readOnly}
            >
                {optionsList}
            </select>
        </div>
    );
};
