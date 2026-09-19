import type { AssetCatalogRef, ImportedMediaArtifact, MediaArtifactBatch } from './artifactBatch.js';
import type { MediaKind, MediaResource, MediaSource } from './mediaResource.js';
export type DriveSpaceProfile = 'ai_generated';
export interface DriveIngestContext {
    tenantId: string;
    ownerSubjectType: string;
    ownerSubjectId: string;
    actorType: string;
    actorId: string;
    spaceProfile: DriveSpaceProfile;
}
export interface DriveImportItemPlan {
    outputIndex: number;
    scene: string;
    driveSpaceId: string;
    driveNodeId: string;
    driveUri: string;
    uploadProfileCode: string;
    uploadTaskId: string;
    providerAssetId?: string;
    providerUri?: string;
    providerUrl?: string;
    mediaResource: MediaResource;
}
export interface DriveImportPlan {
    generationId: string;
    providerCode: string;
    items: DriveImportItemPlan[];
}
export interface AssetPromoteOptions {
    title?: string;
    tags?: string[];
    collectionId?: string;
}
export interface AssetPromoteRequest {
    tenantId: string;
    imported: ImportedMediaArtifact;
    options: AssetPromoteOptions;
}
export declare function buildDriveImportPlan(batch: MediaArtifactBatch, context: DriveIngestContext): DriveImportPlan;
export declare function buildAiGeneratedCatalogRef(imported: ImportedMediaArtifact): AssetCatalogRef;
export declare const CLOUDROUTER_OPEN_SDK_INTEGRATION: {
    readonly rustCrate: "cloudrouter_open_sdk";
    readonly modalities: readonly ["image", "video", "music", "audio"];
};
export type CloudRouterModality = typeof CLOUDROUTER_OPEN_SDK_INTEGRATION.modalities[number];
export declare function resolveMediaKindFromModality(modality: string): MediaKind;
export declare function resolveMediaSourceFromProviderArtifact(hasProviderLocation: boolean): MediaSource;
//# sourceMappingURL=ingestion.d.ts.map