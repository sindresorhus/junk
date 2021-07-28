import {expectType} from 'tsd';
import {isJunk, isNotJunk, junkRegex} from './index.js';

expectType<boolean>(isJunk('foo'));
expectType<boolean>(isNotJunk('foo'));
expectType<RegExp>(junkRegex);
