import { DomainEntity } from '@businessLogic/share/Domain/Entities/DomainEntity';
import { UserIdentification} from './UserIdentification';

export interface User extends DomainEntity {
    identification?: UserIdentification;
    username: string;
    name: string;
    lastName: string;
    email: string;
    avatarUrl?: string;
    userEventTags?: string[];
    emailVerified?: boolean
}