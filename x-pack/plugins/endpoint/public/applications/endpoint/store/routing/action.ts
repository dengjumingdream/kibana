/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { Immutable } from '../../../../../common/types';
import { EndpointAppLocation } from '../../types';

interface UserChangedUrl {
  readonly type: 'userChangedUrl';
  readonly payload: Immutable<EndpointAppLocation>;
}

export type RoutingAction = UserChangedUrl;
