import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'app/providers/ReduxProvider/config/store';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { getProfileDataSelector } from '../../selectors/selectors';

export function ProfileCard() {
	const data = useAppSelector(getProfileDataSelector);

	return (
		<div>
			<div>
				<Input value={data?.first || ''} />
				<Input value={data?.lastname || ''} />
			</div>
		</div>
	);
}
