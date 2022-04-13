import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import styles from './Webpart01WebPart.module.scss';

export interface IWebpart01WebPartProps {
}

export default class Webpart01WebPart extends BaseClientSideWebPart<IWebpart01WebPartProps> {

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  public render(): void {
    this.domElement.innerHTML = `<div class="${ styles.webpart01 }"></div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
