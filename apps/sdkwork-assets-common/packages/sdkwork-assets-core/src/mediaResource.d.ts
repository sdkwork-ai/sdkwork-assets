export type MediaKind = 'archive' | 'audio' | 'document' | 'image' | 'model' | 'other' | 'video' | 'voice';
export type MediaSource = 'data_url' | 'drive' | 'external_url' | 'generated' | 'provider_asset';
export type MediaAiProvenanceKind = 'edited' | 'generated' | 'imported' | 'uploaded';
export type MediaModerationStatus = 'approved' | 'blocked' | 'pending' | 'rejected' | 'unknown';
export type MediaAccessVisibility = 'organization' | 'private' | 'public' | 'signed' | 'tenant';
export interface MediaChecksum {
    algorithm: string;
    value: string;
}
export interface MediaAccess {
    visibility: MediaAccessVisibility;
    expiresAt?: string;
}
export interface MediaAiProvenance {
    provenance?: MediaAiProvenanceKind;
    provider?: string;
    model?: string;
    promptId?: string;
    generationTaskId?: string;
    sourceMediaIds?: string[];
    seed?: string;
    moderationStatus?: MediaModerationStatus;
    safetyLabels?: string[];
}
/** Canonical business-state media per MEDIA_RESOURCE_SPEC §3. */
export interface MediaResource {
    id?: string;
    kind: MediaKind;
    source: MediaSource;
    url?: string;
    publicUrl?: string;
    uri?: string;
    objectBlobId?: string;
    fileName?: string;
    mimeType?: string;
    sizeBytes?: string;
    checksum?: MediaChecksum;
    width?: number;
    height?: number;
    durationSeconds?: number;
    altText?: string;
    title?: string;
    poster?: MediaResource;
    thumbnails?: MediaResource[];
    variants?: MediaResource[];
    access?: MediaAccess;
    ai?: MediaAiProvenance;
    metadata?: Record<string, unknown>;
}
/** Backward-compatible alias used by PC commons consumers. */
export type MediaResourceLike = MediaResource;
export declare function readMediaResourceUrl(value: unknown): string;
export declare function readMediaResourceThumb(media: MediaResource | undefined): string;
export declare function toExternalUrlMediaResource(value: string | null | undefined, kind?: MediaKind): MediaResource | undefined;
export declare function assertMediaResource(value: MediaResource): void;
export declare function normalizeMediaResourceSnapshot(value: unknown): MediaResource | undefined;
//# sourceMappingURL=mediaResource.d.ts.map