import { assertMediaResource } from './mediaResource.js';
import { buildAiGeneratedNodeId, buildAiGeneratedSpaceId, buildDriveUri, buildUploadTaskId, uploadProfileForMediaKind, } from './driveLayout.js';
export function buildDriveImportPlan(batch, context) {
    if (!context.tenantId.trim()) {
        throw new Error('DriveIngestContext.tenantId is required');
    }
    if (!context.ownerSubjectId.trim()) {
        throw new Error('DriveIngestContext.ownerSubjectId is required');
    }
    if (!batch.provenance.generationId.trim()) {
        throw new Error('GenerationProvenance.generationId is required');
    }
    const providerCode = batch.provenance.provider?.providerCode ?? 'unknown';
    const driveSpaceId = buildAiGeneratedSpaceId(context.ownerSubjectType, context.ownerSubjectId);
    const modality = batch.provenance.modality.trim();
    return {
        generationId: batch.provenance.generationId,
        providerCode,
        items: batch.artifacts.map((artifact) => buildItemPlan(artifact, batch.provenance.generationId, modality, batch.provenance.scene, driveSpaceId)),
    };
}
function buildItemPlan(artifact, generationId, modality, scene, driveSpaceId) {
    const driveNodeId = buildAiGeneratedNodeId(generationId, artifact.index);
    const driveUri = buildDriveUri(driveSpaceId, driveNodeId);
    const mediaResource = {
        id: driveNodeId,
        kind: artifact.kind,
        source: 'drive',
        uri: driveUri,
        fileName: artifact.fileName,
        mimeType: artifact.mimeType,
        sizeBytes: artifact.sizeBytes?.toString(),
        width: artifact.width,
        height: artifact.height,
        durationSeconds: artifact.durationSeconds,
        ai: {
            provenance: 'generated',
            generationTaskId: generationId,
        },
    };
    assertMediaResource(mediaResource);
    return {
        outputIndex: artifact.index,
        scene,
        driveSpaceId,
        driveNodeId,
        driveUri,
        uploadProfileCode: uploadProfileForMediaKind(artifact.kind),
        uploadTaskId: buildUploadTaskId(modality, generationId, artifact.index),
        providerAssetId: artifact.providerAssetId,
        providerUri: artifact.providerUri,
        providerUrl: artifact.providerUrl,
        mediaResource,
    };
}
export function buildAiGeneratedCatalogRef(imported) {
    return {
        assetId: imported.driveNodeId,
        driveSpaceId: imported.driveSpaceId,
        driveNodeId: imported.driveNodeId,
        driveUri: imported.driveUri,
        sourceType: 'ai_generated',
        lifecycleState: 'active',
    };
}
export const CLOUDROUTER_OPEN_SDK_INTEGRATION = {
    rustCrate: 'cloudrouter_open_sdk',
    modalities: ['image', 'video', 'music', 'audio'],
};
export function resolveMediaKindFromModality(modality) {
    switch (modality.trim().toLowerCase()) {
        case 'image':
        case 'images':
            return 'image';
        case 'video':
        case 'videos':
            return 'video';
        case 'music':
            return 'audio';
        case 'audio':
        case 'audios':
            return 'audio';
        case 'sfx':
            return 'audio';
        case 'model':
        case 'models':
            return 'model';
        default:
            return 'other';
    }
}
export function resolveMediaSourceFromProviderArtifact(hasProviderLocation) {
    return hasProviderLocation ? 'provider_asset' : 'generated';
}
//# sourceMappingURL=ingestion.js.map