"use strict";

// const fs = require('fs');
// const {EOL} = require('os');

let enable_logging = false;

function log(...s) {
	if (!enable_logging) {
		return;
	}
	console.log.apply(null, s);
}

function make_node(k) {
	return {
		level: k,
		// temporarily allowing having one more element before split
		keys: [],    // k node can have k-1 keys, they are sorted
		children: [] // k node can have k children
	};
};

function binary_search(arr, el) {
	if (!arr.length) {
		log('Arr is empty');
		return 0;
	}

	if (el < arr[0]) {
		log(`El ${el} is smaller than ${arr[0]}`);
		return 0;
	}

	if (el > arr[arr.length - 1]) {
		log(`El ${el} is bigger than ${arr[arr.length - 1]}`);
		return arr.length;
	}

	let i = 0;
	let j = arr.length - 1;
	let p;
	while (i < j - 1) {
		p = (i + j) >> 1; // dividing by 2 but javascript can't do it without Math.floor
		if (arr[p] <= el) {
			i = p;
		} else {
			j = p;
		}
	}

	return i+1;
}

function btree_insert(node, el) {
	log(`Adding ${el} into`, node);
	if (!node) {
		return [null, el, null];
	}

	const idx = binary_search(node.keys, el);
	log(`Got index ${idx}`);
	const child = node.children[idx];
	let result = btree_insert(child, el);
	if (!result) {
		log('No merging root from sub');
		return null; // we are all good
	} 

	let [left, root, right] = result;
	log(`Got new root ${root} and sub trees`, left, right);
	node.keys.splice(idx, 0, root);
	node.children[idx] = left;
	node.children.splice(idx+1, 0, right);

	log(`Node size: ${node.keys.length}, node level: ${node.level}`);
	if (node.keys.length > node.level) {
		let h = node.level >> 1;
		log(`Splitting`);
		log(node.keys, `h index ${h}`);
		let left = make_node(node.level);
		let right = make_node(node.level);
		let root = node.keys[h];
		console.log(`Children`, node.children);
		left.keys = node.keys.slice(0, h);
		left.children = node.children.slice(0, h+1);
		right.keys = node.keys.slice(h+1);
		right.children = node.children.slice(h+1);
		log('Result', left, root, right);
		return [left, root, right];
	} else {
		return null;
	}
}

function make_tree(t, result) {
	if (!result) {
		return t;
	}

	let [left, el, right] = result;
	let root = make_node(t.level);
	root.keys[0] = el;
	root.children[0] = left;
	root.children[1] = right;
	return root;
}

function display_tree(t, path = '') {
	if (!t) {
		return;
	}

	for (let i = 0; i < t.keys.length; i++) {
		display_tree(t.children[i], path + "/" + i);
		console.log(path + " " + t.keys[i]);
	}
	display_tree(t.children[t.keys.length], path + "/" + t.keys.length);
}

// let arr = [1, 3, 5, 7];

// const el = -2;
// const pos = binary_search(arr, el);
// arr.splice(pos, 0, el);
// log(`Binary search`, arr);

let t = make_node(2);
// t = make_tree(t, btree_insert(t, 1));
// t = make_tree(t, btree_insert(t, 2));
// t = make_tree(t, btree_insert(t, 3));
// t = make_tree(t, btree_insert(t, 4));
// t = make_tree(t, btree_insert(t, 5));
// t = make_tree(t, btree_insert(t, 6));
// t = make_tree(t, btree_insert(t, 7));

display_tree(t);
// enable_logging = true;
t = make_tree(t, btree_insert(t, 1));
t = make_tree(t, btree_insert(t, 2));
t = make_tree(t, btree_insert(t, 3));
t = make_tree(t, btree_insert(t, 4));
t = make_tree(t, btree_insert(t, 5));
t = make_tree(t, btree_insert(t, 6));
t = make_tree(t, btree_insert(t, 7));
t = make_tree(t, btree_insert(t, 8));
t = make_tree(t, btree_insert(t, 5));
t = make_tree(t, btree_insert(t, 5));
// console.log(t);
//enable_logging = false;
display_tree(t);