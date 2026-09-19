import { isBlank, trim } from '@sdkwork/utils';
export function readMediaResourceUrl(value) {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
        return '';
    }
    const record = value;
    for (const key of ['publicUrl', 'url', 'uri', 'objectBlobId', 'id']) {
        const raw = record[key];
        if (typeof raw === 'string') {
            const normalized = trim(raw);
            if (!isBlank(normalized)) {
                return normalized;
            }
        }
    }
    return '';
}
export function readMediaResourceThumb(media) {
    return readMediaResourceUrl(media?.poster)
        || readMediaResourceUrl(media?.thumbnails?.[0])
        || readMediaResourceUrl(media);
}
export function toExternalUrlMediaResource(value, kind = 'image') {
    const url = typeof value === 'string' ? trim(value) : '';
    if (isBlank(url)) {
        return undefined;
    }
    return {
        kind,
        source: url.startsWith('data:') ? 'data_url' : 'external_url',
        url,
        publicUrl: url,
    };
}
export function assertMediaResource(value) {
    if (isBlank(value.kind)) {
        throw new Error('MediaResource.kind is required');
    }
    if (isBlank(value.source)) {
        throw new Error('MediaResource.source is required');
    }
}
export function normalizeMediaResourceSnapshot(value) {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
        return undefined;
    }
    const record = value;
    const kind = record.kind;
    const source = record.source;
    if (typeof kind !== 'string' || isBlank(kind) || typeof source !== 'string' || isBlank(source)) {
        return undefined;
    }
    return record;
}
//# sourceMappingURL=mediaResource.js.map