import { type Ref } from 'vue';

const config = {
  $N: 'u',
  $blockSeparator: '-',
  $elementSeparator: '_',
  $modifierSeparator: '--',
  $statePrefix: 'is-',
};
type Str = string | undefined | null;

const is = (cls: Str) => (cls ? config.$statePrefix + cls : '');
const when = (condition: boolean | Ref<boolean>, cls: Str = 'active') => {
  return { [is(cls)]: condition };
};

export const useBEM = (ns: Str) => {
  const namespace = ns || config.$N;
  const _bem = (_b: Str, _e: Str, _m: Str) => {
    let cls = namespace;
    if (_b) cls += config.$blockSeparator + _b;
    if (_e) cls += config.$elementSeparator + _e;
    if (_m) cls += config.$modifierSeparator + _m;
    return cls;
  };
  let block = '';
  let element = '';
  const b = (_b: Str) => (_b ? _bem((block = _b), '', '') : '');
  const e = (_e: Str) => (_e ? _bem(block, (element = _e), '') : '');
  const m = (_m: Str) => (_m ? _bem(block, element, _m) : '');
  const be = (_b: Str, _e: Str) => (_b && _e ? _bem(_b, _e, '') : '');
  const em = (_e: Str, _m: Str) => (_e && _m ? _bem('', _e, _m) : '');
  const bm = (_b: Str, _m: Str) => (_b && _m ? _bem(_b, '', _m) : '');
  const bem = (_b: Str, _e: Str, _m: Str) =>
    _b && _e && _m ? _bem(_b, _e, _m) : '';

  return {
    config,
    namespace,
    is,
    when,
    _bem,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
  };
};
