/**
 * Copyright (c) 2024, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import {Authenticator, BrandingProps} from '@asgardeo/js-ui-core';
import {ReactElement} from 'react';

interface BasicAuthProps {
  alert?: {
    alertType:
      | {error?: boolean; info?: never; warning?: never}
      | {error?: never; info?: boolean; warning?: never}
      | {error?: never; infor?: never; warning?: boolean};
    message: string;
  };
  authenticator: Authenticator;
  brandingProps?: BrandingProps;
  handleAuthenticate: Function;
  renderLoginOptions?: ReactElement[];
  showSelfSignUp: boolean;
}

export default BasicAuthProps;
