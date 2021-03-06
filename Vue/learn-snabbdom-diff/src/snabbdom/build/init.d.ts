import { Module } from "./modules/module";
import { VNode } from "./vnode";
import { DOMAPI } from "./htmldomapi";
declare type Options = {
    experimental?: {
        fragments?: boolean;
    };
};
export declare function init(
  modules: Array<Partial<Module>>, 
  domApi?: DOMAPI, options?: Options): (oldVnode: VNode | Element | DocumentFragment, vnode: VNode) => VNode;
export {};
