import type { RootState } from '../../../redux/store'
export const getProfiles = (state: RootState): any[] => state.profileList.profiles
