// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ScanMetadata } from 'common/types/store-data/scan-meta-data';
import { ToolData } from 'common/types/store-data/unified-data-interface';
import { shallow } from 'enzyme';
import * as React from 'react';
import { FooterTextForUnified } from 'reports/components/report-sections/footer-text-for-unified';

describe('FooterText', () => {
    it('renders', () => {
        const toolData: ToolData = {
            scanEngineProperties: {
                name: 'engine-name',
                version: 'engine-version',
            },
            applicationProperties: {
                name: 'app-name',
                version: 'app-version',
                environmentName: 'environmentName',
            },
        };
        const scanMetadata = {
            toolData,
        } as ScanMetadata;

        const footerWrapper = shallow(<FooterTextForUnified {...{ scanMetadata }} />);
        expect(footerWrapper.getElement()).toMatchSnapshot();
    });
});
