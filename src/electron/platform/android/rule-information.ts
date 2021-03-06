// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { UnifiedFormattableResolution } from 'common/types/store-data/unified-data-interface';
import { RuleResultsData } from './android-scan-results';

export type GetUnifiedFormattableResolutionDelegate = (
    ruleResultsData: RuleResultsData,
) => UnifiedFormattableResolution;

export type IncludeThisResultDelegate = (ruleResultsData: RuleResultsData) => boolean;

export class RuleInformation {
    constructor(
        readonly ruleId: string,
        readonly ruleDescription: string,
        readonly getUnifiedFormattableResolutionDelegate: GetUnifiedFormattableResolutionDelegate,
        readonly includeThisResultDelegate: IncludeThisResultDelegate,
    ) {}

    public getUnifiedFormattableResolution(
        ruleResultsData: RuleResultsData,
    ): UnifiedFormattableResolution {
        return this.getUnifiedFormattableResolutionDelegate(ruleResultsData);
    }

    public includeThisResult(ruleResultsData: RuleResultsData): boolean {
        return this.includeThisResultDelegate(ruleResultsData);
    }
}
