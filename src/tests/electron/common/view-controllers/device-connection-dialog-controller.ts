// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import * as WebDriverIO from 'webdriverio';
import { CommonSelectors } from '../element-identifiers/common-selectors';
import { DeviceConnectionDialogSelectors } from '../element-identifiers/device-connection-dialog-selectors';
import { ViewController } from './view-controller';

export class DeviceConnectionDialogController extends ViewController {
    constructor(client: WebDriverIO.Client<void>) {
        super(client);
    }

    public async waitForDialogVisible(): Promise<void> {
        await this.waitForSelector(CommonSelectors.rootContainer);
    }

    // inputs the port, validates, and starts scanning
    public async connectToPort(port: number): Promise<void> {
        await this.client.click(DeviceConnectionDialogSelectors.portNumber);
        await this.client.element(DeviceConnectionDialogSelectors.portNumber).keys(port.toString());

        await this.client.waitForEnabled(DeviceConnectionDialogSelectors.validateButton);
        await this.client.click(DeviceConnectionDialogSelectors.validateButton);

        await this.client.waitForEnabled(DeviceConnectionDialogSelectors.startButton);
        await this.client.click(DeviceConnectionDialogSelectors.startButton);
    }
}
