import {expectType} from 'tsd';
import junk = require('.');

expectType<boolean>(junk.is('foo'));
expectType<boolean>(junk.not('foo'));
expectType<RegExp>(junk.regex);
