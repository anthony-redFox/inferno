/*!
 * inferno-create-element v1.0.0-beta7
 * (c) 2016 Dominic Gannaway
 * Released under the MIT License.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.InfernoCreateElement = factory());
}(this, (function () { 'use strict';

var ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';


function isArray(obj) {
    return obj instanceof Array;
}
function isStatefulComponent(o) {
    return !isUndefined(o.prototype) && !isUndefined(o.prototype.render);
}
function isStringOrNumber(obj) {
    return isString(obj) || isNumber(obj);
}
function isNullOrUndef(obj) {
    return isUndefined(obj) || isNull(obj);
}
function isInvalid(obj) {
    return isNull(obj) || obj === false || isTrue(obj) || isUndefined(obj);
}

function isAttrAnEvent(attr) {
    return attr[0] === 'o' && attr[1] === 'n' && attr.length > 3;
}
function isString(obj) {
    return typeof obj === 'string';
}
function isNumber(obj) {
    return typeof obj === 'number';
}
function isNull(obj) {
    return obj === null;
}
function isTrue(obj) {
    return obj === true;
}
function isUndefined(obj) {
    return obj === undefined;
}
function isObject(o) {
    return typeof o === 'object';
}

function cloneVNode(vNodeToClone, props) {
    var _children = [], len = arguments.length - 2;
    while ( len-- > 0 ) _children[ len ] = arguments[ len + 2 ];

    var children = _children;
    if (_children.length > 0 && !isNull(_children[0])) {
        if (!props) {
            props = {};
        }
        if (_children.length === 1) {
            children = _children[0];
        }
        if (isUndefined(props.children)) {
            props.children = children;
        }
        else {
            if (isArray(children)) {
                if (isArray(props.children)) {
                    props.children = props.children.concat(children);
                }
                else {
                    props.children = [props.children].concat(children);
                }
            }
            else {
                if (isArray(props.children)) {
                    props.children.push(children);
                }
                else {
                    props.children = [props.children];
                    props.children.push(children);
                }
            }
        }
    }
    children = null;
    var newVNode;
    if (isArray(vNodeToClone)) {
        newVNode = vNodeToClone.map(function (vNode) { return cloneVNode(vNode); });
    }
    else if (isNullOrUndef(props) && isNullOrUndef(children)) {
        newVNode = Object.assign({}, vNodeToClone);
    }
    else {
        var flags = vNodeToClone.flags;
        if (flags & 12 /* Component */) {
            newVNode = createVNode(vNodeToClone.type, Object.assign({}, vNodeToClone.props, props), null, flags, vNodeToClone.key, vNodeToClone.ref);
        }
        else if (flags & 1986 /* Element */) {
            newVNode = createVNode(vNodeToClone.type, Object.assign({}, vNodeToClone.props, props), (props && props.children) || children || vNodeToClone.children, flags, vNodeToClone.key, vNodeToClone.ref);
        }
    }
    newVNode.dom = null;
    return newVNode;
}

function _normaliseVNodes(nodes, result, i) {
    for (; i < nodes.length; i++) {
        var n = nodes[i];
        if (!isInvalid(n)) {
            if (Array.isArray(n)) {
                _normaliseVNodes(n, result, 0);
            }
            else {
                if (isStringOrNumber(n)) {
                    n = createTextVNode(n);
                }
                else if (isVNode(n) && n.dom) {
                    n = cloneVNode(n);
                }
                result.push(n);
            }
        }
    }
}
function normaliseVNodes(nodes) {
    var newNodes;
    for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        if (isInvalid(n) || Array.isArray(n)) {
            var result = (newNodes || nodes).slice(0, i);
            _normaliseVNodes(nodes, result, i);
            return result;
        }
        else if (isStringOrNumber(n)) {
            if (!newNodes) {
                newNodes = nodes.slice(0, i);
            }
            newNodes.push(createTextVNode(n));
        }
        else if (isVNode(n) && n.dom) {
            if (!newNodes) {
                newNodes = nodes.slice(0, i);
            }
            newNodes.push(cloneVNode(n));
        }
        else if (newNodes) {
            newNodes.push(cloneVNode(n));
        }
    }
    return newNodes || nodes;
}
function createVNode(flags, type, props, children, key, ref, noNormalise) {
    if (props) {
        if (isNullOrUndef(children) && !isNullOrUndef(props.children)) {
            children = props.children;
        }
        if (props.ref) {
            ref = props.ref;
        }
        if (!isNullOrUndef(props.key)) {
            key = props.key;
        }
    }
    if (!noNormalise && isArray(children)) {
        children = normaliseVNodes(children);
    }
    if (isNull(flags)) {
        flags = isStatefulComponent(type) ? 4 /* ComponentClass */ : 8 /* ComponentFunction */;
    }
    return {
        children: isUndefined(children) ? null : children,
        dom: null,
        flags: flags || 0,
        key: key === undefined ? null : key,
        props: props || null,
        ref: ref || null,
        type: type
    };
}

function createTextVNode(text) {
    return createVNode(1 /* Text */, null, null, text);
}
function isVNode(o) {
    return !!o.flags;
}

var componentHooks = {
    onComponentWillMount: true,
    onComponentDidMount: true,
    onComponentWillUnmount: true,
    onComponentShouldUpdate: true,
    onComponentWillUpdate: true,
    onComponentDidUpdate: true
};
function createElement$1(name, props) {
    var _children = [], len = arguments.length - 2;
    while ( len-- > 0 ) _children[ len ] = arguments[ len + 2 ];

    if (isInvalid(name) || isObject(name)) {
        throw new Error('Inferno Error: createElement() name paramater cannot be undefined, null, false or true, It must be a string, class or function.');
    }
    var children = _children;
    var vNode = createVNode(0);
    var ref = null;
    var key = null;
    var flags = 0;
    if (_children) {
        if (_children.length === 1) {
            children = _children[0];
        }
        else if (_children.length === 0) {
            children = undefined;
        }
    }
    if (isString(name)) {
        flags = 2 /* HtmlElement */;
        switch (name) {
            case 'svg':
                flags = 64 /* SvgElement */;
                break;
            case 'input':
                flags = 256 /* InputElement */;
                break;
            case 'textarea':
                flags = 512 /* TextareaElement */;
                break;
            case 'select':
                flags = 1024 /* SelectElement */;
                break;
            default:
        }
        for (var prop in props) {
            if (prop === 'key') {
                key = props.key;
                delete props.key;
            }
            else if (prop === 'children' && isUndefined(children)) {
                children = props.children; // always favour children args, default to props
            }
            else if (prop === 'ref') {
                ref = props.ref;
            }
            else if (isAttrAnEvent(prop)) {
                var lowerCase = prop.toLowerCase();
                if (lowerCase !== prop) {
                    props[prop.toLowerCase()] = props[prop];
                    delete props[prop];
                }
            }
        }
    }
    else {
        flags = isStatefulComponent(name) ? 4 /* ComponentClass */ : 8 /* ComponentFunction */;
        if (!isUndefined(children)) {
            if (!props) {
                props = {};
            }
            props.children = children;
        }
        for (var prop$1 in props) {
            if (componentHooks[prop$1]) {
                if (!ref) {
                    ref = {};
                }
                ref[prop$1] = props[prop$1];
            }
            else if (prop$1 === 'key') {
                key = props.key;
                delete props.key;
            }
        }
        vNode.props = props;
    }
    return createVNode(flags, name, props, children, key, ref);
}

return createElement$1;

})));