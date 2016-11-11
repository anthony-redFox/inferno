import { isArray, isString } from '../shared';

const emptyObject = Object.create(null);

export function decode(val: any): any {
	return typeof val !== 'string' ? val : decodeURIComponent(val);
}

export function isEmpty(children): boolean {
	return !children || !(isArray(children) ? children : Object.keys(children)).length;
}

export function flatten(oldArray) {
	const newArray = [];

	flattenArray(oldArray, newArray);
	return newArray;
}

export function getURLString(location): string {
	return isString(location) ? location : (location.pathname + location.search);
}

export function mapSearchParams(search): any {
	if (search === '') {
		return emptyObject;
	}

	// Create an object with no prototype
	const map = Object.create(null);
	const fragment = search.split('&');

	for (let i = 0; i < fragment.length; i++) {
		const [k, v] = fragment[i].split('=').map(mapFragment);

		if (map[k]) {
			map[k] = isArray(map[k]) ? map[k] : [map[k]];
			map[k].push(v);
		} else {
			map[k] = v;
		}
	}
	return map;
}

export function pathRankSort(a: any, b: any) {
	const aAttr = a.props || emptyObject;
	const bAttr = b.props || emptyObject;
	const diff = rank(bAttr.path) - rank(aAttr.path);
	return diff || (bAttr.path && aAttr.path) ? (bAttr.path.length - aAttr.path.length) : 0;
}

function mapFragment(p: string, isVal: number): string {
	return decodeURIComponent(isVal | 0 ? p : p.replace('[]', ''));
}

function strip(url: string): string {
	return url.replace(/(^\/+|\/+$)/g, '');
}

function rank(url: string = ''): number {
	return (strip(url).match(/\/+/g) || '').length;
}

function flattenArray(oldArray, newArray) {
	for (let i = 0; i < oldArray.length; i++) {
		const item = oldArray[i];

		if (isArray(item)) {
			flattenArray(item, newArray);
		} else {
			newArray.push(item);
		}
	}
}