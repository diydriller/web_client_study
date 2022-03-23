import { InjectionKey } from 'vue';
import { UserInfo } from '@/types/UserInfo';

const UserInfoKey: InjectionKey<UserInfo> = Symbol('user');
export {UserInfoKey};
