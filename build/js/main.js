"use strict";
const Echo = (args) => args;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg));
};
