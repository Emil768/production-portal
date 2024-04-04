import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/providers/ReduxProvider/config/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
