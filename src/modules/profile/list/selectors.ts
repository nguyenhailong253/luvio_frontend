import type { RootState } from '../../../redux/store'
import type { Profile } from '../types'
export const getProfiles = (state: RootState): Profile[] => state.profileList.profiles
