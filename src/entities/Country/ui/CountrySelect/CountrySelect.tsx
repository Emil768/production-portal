import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select } from '@/shared/ui/Select';
import { Country } from '../../model/types';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readOnly?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo(
    ({ className, value, onChange, readOnly }: CountrySelectProps) => {
        const { t } = useTranslation();

        const onChangeHandler = useCallback(
            (value: Country) => {
                onChange?.(value);
            },
            [onChange],
        );

        return (
            <Select
                className={classNames('', {}, [className])}
                options={options}
                value={value}
                onChange={onChangeHandler}
                readOnly={readOnly}
            />
        );
    },
);
