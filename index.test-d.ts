import {expectType} from 'tsd-check';
import junk from '.';

expectType<boolean>(junk.is('foo'));
expectType<boolean>(junk.not('foo'));
expectType<RegExp>(junk.regex);
