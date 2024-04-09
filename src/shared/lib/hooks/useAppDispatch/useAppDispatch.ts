import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/providers/ReduxProvider';

export const useAppDispatch = () => useDispatch<AppDispatch>();
