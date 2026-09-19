import type { AssetCatalogRef, AssetSourceType } from './artifactBatch.js';
import type { MediaKind, MediaResource } from './mediaResource.js';
/** Drive global asset catalog kind — authority: drive-app-api AssetItem.assetKind. */
export type DriveAssetKind = 'audio' | 'document' | 'file' | 'image' | 'model' | 'other' | 'video';
/** Drive global asset source — authority: drive-app-api AssetItem.sourceType. */
export type DriveAssetSourceType = 'ai_generated' | 'edited' | 'imported' | 'system' | 'upload';
/** Minimal Drive catalog item shape for mapping without importing drive-app-sdk. */
export interface DriveAssetItemLike {
    assetId: string;
    driveSpaceId: string;
    driveNodeId: string;
    driveUri: string;
    assetKind: DriveAssetKind;
    sourceType?: DriveAssetSourceType;
    lifecycleStatus?: string;
    title?: string;
    resourceSnapshot?: unknown;
}
/** PC gallery view taxonomy — UI-only, not a platform catalog enum. */
export type AssetGalleryType = 'image' | 'music' | 'sound' | 'speech' | 'video';
export declare function mediaKindToAssetKind(kind: MediaKind): DriveAssetKind;
export declare function assetKindToMediaKind(kind: DriveAssetKind): MediaKind;
export declare function driveSourceTypeToCatalogSourceType(sourceType: DriveAssetSourceType | undefined): AssetSourceType;
export declare function assetItemToMediaResource(item: DriveAssetItemLike): MediaResource | undefined;
export declare function assetItemToCatalogRef(item: DriveAssetItemLike): AssetCatalogRef;
export declare function galleryTypeFromMediaKind(kind: MediaKind, modality?: string): AssetGalleryType;
export declare function readAssetItemDeliveryUrl(item: DriveAssetItemLike): string;
//# sourceMappingURL=assetMapping.d.ts.map