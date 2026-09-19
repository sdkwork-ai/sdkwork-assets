import { isBlank } from '@sdkwork/utils';
export function validateMediaArtifactBatch(batch) {
    if (isBlank(batch.batchId)) {
        throw new Error('MediaArtifactBatch.batchId is required');
    }
    if (batch.artifacts.length === 0) {
        throw new Error('MediaArtifactBatch.artifacts must not be empty');
    }
    const seen = new Set();
    for (const artifact of batch.artifacts) {
        if (artifact.index < 0) {
            throw new Error('MediaArtifact.index must be non-negative');
        }
        if (seen.has(artifact.index)) {
            throw new Error('MediaArtifact.index must be unique within batch');
        }
        seen.add(artifact.index);
    }
}
//# sourceMappingURL=artifactBatch.js.map