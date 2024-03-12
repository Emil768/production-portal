export { ProfileCard } from './model/ui/ProfileCard';

export type { Profile, ProfileSchema } from './model/types/profile';

export { profileActions, profileReducer } from './model/slice/profileSlice';

export { fetchProfileData } from './model/services/fetchProfileData';
