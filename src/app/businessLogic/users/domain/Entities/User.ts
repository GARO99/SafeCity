import { UserIdentification} from "./UserIdentification";

export interface User {
    id: string;
    identification: UserIdentification;
    username: string;
    name: string;
    lastName: string;
    email: string;
    userEventTags: string[];
    active: boolean;
}