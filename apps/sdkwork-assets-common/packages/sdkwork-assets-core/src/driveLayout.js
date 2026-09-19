export function stableIdentifierSuffix(value) {
    return value
        .trim()
        .replace(/[^a-zA-Z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .toLowerCase()
        .slice(0, 48);
}
export function buildAiGeneratedSpaceId(ownerSubjectType, ownerSubjectId) {
    return `space-ai-generated-${stableIdentifierSuffix(ownerSubjectType)}-${stableIdentifierSuffix(ownerSubjectId)}`;
}
export function buildAiGeneratedNodeId(generationId, outputIndex) {
    return `node-ai-generated-${stableIdentifierSuffix(generationId)}-${outputIndex}`;
}
export function buildDriveUri(spaceId, nodeId) {
    return `drive://spaces/${spaceId}/nodes/${nodeId}`;
}
export function buildUploadTaskId(modality, generationId, outputIndex) {
    return `${stableIdentifierSuffix(modality)}-generation-${stableIdentifierSuffix(generationId)}-${outputIndex}`;
}
export function uploadProfileForMediaKind(kind) {
    switch (kind) {
        case 'image':
            return 'image';
        case 'video':
            return 'video';
        case 'audio':
        case 'voice':
            return 'audio';
        case 'document':
            return 'document';
        default:
            return 'generic';
    }
}
//# sourceMappingURL=driveLayout.js.map