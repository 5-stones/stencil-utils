import hooks from './hooks';
import api from './api';
import tools from './tools';
import $ from 'jquery';

const StencilUtils = {
    hooks: hooks,
    api: api,
    tools: tools,
};

export {hooks, api, tools};
export default StencilUtils;

/* global define */
(function(root) {
    if (typeof define === 'function' && define.amd) {
        define(function() {
            return (root.stencilUtils = StencilUtils);
        });
    } else if (typeof module === 'object' && module.exports) {
        module.exports = StencilUtils;
    } else {
        $.noConflict(true);
        window.stencilUtils = StencilUtils;
    }
}(this));
