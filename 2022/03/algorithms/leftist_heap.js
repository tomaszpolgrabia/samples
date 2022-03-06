"use strict";

// const fs = require('fs');
// const {EOL} = require('os');

function log(v) {
	// console.log(v);
}

function merge_heap(a, b) {
	log('a', a);
	log('b', b);
	if (!a) {
		log('a is empty. Returning b');
		return b;
	}

	if (!b) {
		log('b is empty. Returning a');
		return a;
	}

	// a & b are non null

	if (a.value > b.value) {
		log(`a.value is bigger than b.value`);
		return merge_heap(b, a); // heap the top, the smallest
	}

	log('Merging a.right with b');
	a.right = merge_heap(a.right, b); // merging right as right is usually smaller
	// and should be more performent thus
	// a.right is not null as b is not null
	if (!a.left) {
		a.left = a.right;
		a.right = null;
		a.height = 1;
		return a; // a is already merged with b and having null right
	}

	let t;
	// we keep leftist tree intact as it's balanced to the left
	if (a.left.height < a.right.height) {
		t = a.left;
		a.left = a.right;
		a.right = t;
	}

	a.height = a.right.height + 1;
	return a;
}

function pop_heap(heap) {
	return merge_heap(heap.left, heap.right);
}

function insert_heap(heap, val) {
	return merge_heap(heap, {value: val, height: 0});
}

let values = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
let heap = {root: null};

// heap.root = merge_heap(heap.root, {value: 1, height: 1});
// heap.root = merge_heap(heap.root, {value: 2, height: 1});
// heap.root = merge_heap(heap.root, {value: 3, height: 1});
// heap.root = merge_heap(heap.root, {value: -1, height: 1});

for (let el of values) {
	heap.root = merge_heap(heap.root, {value: el, height: 1});
}

while (heap.root) {
	let el = heap.root.value;
	console.log(`Value: ${el}`);
	heap.root = pop_heap(heap.root);
}
