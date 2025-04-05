import { Customer } from '@/modules/profile/models/Customer';
import { getMyProfile } from '@/modules/profile/services/ProfileService';
import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

interface UserInfoContextType {
  user: Customer | null;  
  fetchUserInfo: () => void;  
}

export const UserInfoContext = createContext<UserInfoContextType>({
  user: null,
  fetchUserInfo: () => {},
});

export function UserInfoProvider({ children }: React.PropsWithChildren) {
  const [user, setUser] = useState<null | Customer>(null);
  
  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = useCallback(() => {
    getMyProfile()
      .then((res) => {
        setUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const value = useMemo(
    () => ({
      user,
      fetchUserInfo,
    }),
    [user, fetchUserInfo]
  );

  return <UserInfoContext.Provider value={value}>{children}</UserInfoContext.Provider>;
}

export const useUserInfoContext = () => {
  const { user, fetchUserInfo } = useContext(UserInfoContext);
  return { user, fetchUserInfo };
};
