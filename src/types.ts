import { drive_v3 } from 'googleapis';
import Schema$File = drive_v3.Schema$File;
import Params$Resource$Files$Get = drive_v3.Params$Resource$Files$Get;
import Params$Resource$Files$List = drive_v3.Params$Resource$Files$List;
import Params$Resource$Files$Create = drive_v3.Params$Resource$Files$Create;

export { Schema$File, Params$Resource$Files$Create, Params$Resource$Files$Get, Params$Resource$Files$List };

export type FieldsType = 'appProperties'
    | 'capabilities'
    | 'contentHints'
    | 'createdTime'
    | 'description'
    | 'explicitlyTrashed'
    | 'fileExtension'
    | 'folderColorRgb'
    | 'fullFileExtension'
    | 'hasAugmentedPermissions'
    | 'hasThumbnail'
    | 'headRevisionId'
    | 'iconLink'
    | 'id'
    | 'imageMediaMetadata'
    | 'isAppAuthorized'
    | 'kind'
    | 'lastModifyingUser'
    | 'md5Checksum'
    | 'mimeType'
    | 'modifiedByMe'
    | 'modifiedByMeTime'
    | 'modifiedTime'
    | 'name'
    | 'originalFilename'
    | 'ownedByMe'
    | 'owners'
    | 'parents'
    | 'properties'
    | 'quotaBytesUsed'
    | 'shared'
    | 'sharedWithMeTime'
    | 'sharingUser'
    | 'size'
    | 'spaces'
    | 'starred'
    | 'teamDriveId'
    | 'thumbnailLink'
    | 'thumbnailVersion'
    | 'trashed'
    | 'trashedTime'
    | 'trashingUser'
    | 'version'
    | 'videoMediaMetadata'
    | 'viewedByMe'
    | 'viewedByMeTime'
    | 'viewersCanCopyContent'
    | 'webContentLink'
    | 'webViewLink'
    | 'writersCanShare';
export const allFileTypes: FieldsType[] = [
  'appProperties',
  'capabilities',
  'contentHints',
  'createdTime',
  'description',
  'explicitlyTrashed',
  'fileExtension',
  'folderColorRgb',
  'fullFileExtension',
  'hasAugmentedPermissions',
  'hasThumbnail',
  'headRevisionId',
  'iconLink',
  'id',
  'imageMediaMetadata',
  'isAppAuthorized',
  'lastModifyingUser',
  'md5Checksum',
  'mimeType',
  'modifiedByMe',
  'modifiedByMeTime',
  'modifiedTime',
  'name',
  'originalFilename',
  'ownedByMe',
  'owners',
  'parents',
  'properties',
  'quotaBytesUsed',
  'shared',
  'sharedWithMeTime',
  'sharingUser',
  'size',
  'spaces',
  'starred',
  'teamDriveId',
  'thumbnailLink',
  'thumbnailVersion',
  'trashed',
  'trashedTime',
  'trashingUser',
  'version',
  'videoMediaMetadata',
  'viewedByMe',
  'viewedByMeTime',
  'viewersCanCopyContent',
  'webContentLink',
  'webViewLink',
  'writersCanShare',
];

export interface Schema$File$Modded extends Schema$File {
  isDeleted: boolean;
  isFolder: boolean;
  parentFolder?: string;
}

export interface UploadOptionsBasic {
  create?: boolean;
  replace?: boolean;
}

export interface UploadOptions extends UploadOptionsBasic {
  compress?: string | boolean;
}
