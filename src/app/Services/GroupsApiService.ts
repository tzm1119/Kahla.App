import { ApiService } from './ApiService';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { AiurValue } from '../Models/AiurValue';
import { AiurProtocal } from '../Models/AiurProtocal';
import { AiurCollection } from '../Models/AiurCollection';
import { GroupConversation } from '../Models/GroupConversation';

@Injectable()
export class GroupsApiService {
    private static serverPath = '/groups';

    constructor(
        private apiService: ApiService
    ) {}

    public CreateGroup(groupName: string): Observable<AiurValue<number>> {
        return this.apiService.Post(GroupsApiService.serverPath + '/CreateGroupConversation', { GroupName: groupName });
    }

    public JoinGroup(groupName: string): Observable<AiurProtocal> {
        return this.apiService.Post(GroupsApiService.serverPath + '/JoinGroup', {GroupName: groupName});
    }

    public LeaveGroup(groupName: string): Observable<AiurProtocal> {
        return this.apiService.Post(GroupsApiService.serverPath + '/LeaveGroup', {GroupName: groupName});
    }

    public SearchGroup(groupName: string, take: number): Observable<AiurCollection<GroupConversation>> {
        return this.apiService.Get(GroupsApiService.serverPath + `/SearchGroup?GroupName=${groupName}&take=${take}`);
    }
}