import { isBlank } from '@sdkwork/utils';
import { normalizeMediaResourceSnapshot, readMediaResourceUrl } from './mediaResource.js';
const MEDIA_KIND_TO_ASSET_KIND = {
    image: 'image',
    video: 'video',
    audio: 'audio',
    voice: 'audio',
    document: 'document',
    model: 'model',
    archive: 'file',
    other: 'other',
};
const ASSET_KIND_TO_MEDIA_KIND = {
    image: 'image',
    video: 'video',
    audio: 'audio',
    document: 'document',
    model: 'model',
    file: 'archive',
    other: 'other',
};
const SOURCE_TYPE_TO_CATALOG = {
    upload: 'upload',
    ai_generated: 'ai_generated',
    imported: 'imported',
    edited: 'edited',
    system: 'system',
};
export function mediaKindToAssetKind(kind) {
    return MEDIA_KIND_TO_ASSET_KIND[kind] ?? 'other';
}
export function assetKindToMediaKind(kind) {
    return ASSET_KIND_TO_MEDIA_KIND[kind] ?? 'other';
}
export function driveSourceTypeToCatalogSourceType(sourceType) {
    if (!sourceType) {
        return 'upload';
    }
    return SOURCE_TYPE_TO_CATALOG[sourceType] ?? 'upload';
}
export function assetItemToMediaResource(item) {
    const snapshot = normalizeMediaResourceSnapshot(item.resourceSnapshot);
    if (snapshot) {
        return snapshot;
    }
    if (isBlank(item.driveUri)) {
        return undefined;
    }
    return {
        id: item.driveNodeId,
        kind: assetKindToMediaKind(item.assetKind),
        source: 'drive',
        uri: item.driveUri,
        title: item.title,
    };
}
export function assetItemToCatalogRef(item) {
    return {
        assetId: item.assetId,
        driveSpaceId: item.driveSpaceId,
        driveNodeId: item.driveNodeId,
        driveUri: item.driveUri,
        sourceType: driveSourceTypeToCatalogSourceType(item.sourceType),
        lifecycleState: item.lifecycleStatus === 'archived' ? 'archived' : 'active',
    };
}
export function galleryTypeFromMediaKind(kind, modality) {
    if (kind === 'image') {
        return 'image';
    }
    if (kind === 'video') {
        return 'video';
    }
    if (kind === 'voice') {
        return 'speech';
    }
    const normalizedModality = modality?.trim().toLowerCase();
    if (normalizedModality === 'music') {
        return 'music';
    }
    if (normalizedModality === 'sfx') {
        return 'sound';
    }
    if (kind === 'audio') {
        return normalizedModality === 'audio' ? 'speech' : 'music';
    }
    return 'image';
}
export function readAssetItemDeliveryUrl(item) {
    const resource = assetItemToMediaResource(item);
    return readMediaResourceUrl(resource);
}
//# sourceMappingURL=assetMapping.js.map