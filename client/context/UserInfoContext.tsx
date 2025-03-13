import { Customer } from '@/modules/profile/models/Customer';
import { getMyProfile } from '@/modules/profile/services/ProfileService';
import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

interface UserInfoContextType {
  profile: Customer | null;  
  fetchUserInfo: () => void;  
}

export const UserInfoContext = createContext<UserInfoContextType>({
  profile: null,
  fetchUserInfo: () => {},
});

export function UserInfoProvider({ children }: React.PropsWithChildren) {
  const [profile, setProfile] = useState<null | Customer>(null);
  
  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = useCallback(() => {
    getMyProfile()
      .then((res) => {
        setProfile(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const value = useMemo(
    () => ({
      profile,
      fetchUserInfo,
    }),
    [profile, fetchUserInfo]
  );

  return <UserInfoContext.Provider value={value}>{children}</UserInfoContext.Provider>;
}

export const useUserInfoContext = () => {
  const { profile, fetchUserInfo } = useContext(UserInfoContext);
  return { profile, fetchUserInfo };
};
