/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { deepFreeze } from '../utils/collections';
import * as typesWithoutNamespaceData from './typesWithoutNamespace.json';
import { TypesWithoutNamespace } from './types';

/**
 * Registry types that have ommited namespace when retrieved via the Metadata API.
 */
export const typesWithoutNamespace = deepFreeze(typesWithoutNamespaceData as TypesWithoutNamespace);
