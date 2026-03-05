import type { Proposal } from '../types';
import { tema01 } from './tema-01-centrum';
import { tema02 } from './tema-02-havet';
import { tema03 } from './tema-03-grona';
import { tema04 } from './tema-04-unga';
import { tema05 } from './tema-05-mat';
// tema06-10 will be added later
export const proposals: Proposal[] = [...tema01, ...tema02, ...tema03, ...tema04, ...tema05];
