"use strict";

// const fs = require('fs');
// const {EOL} = require('os');

function log(s) {
	// console.log(s);
}

function find_min(l) {
	if (!l || !l.length) {
		return null;
	}

	let min = l[0];
	let idx = 0;
	for (let i = 1; i < l.length; i++) {
		if (min.value > l[i].value) {
			min = l[i];
			idx = i;
		}
	}

	return [min, idx];
}

function merge_some_level_trees(l, r) {
	// merge it into level+1 and it becomes t
	if (l.value < r.value) {
		// l becomes root
		l.children.push(r);
		l.level++;
		return l;
	} else {
		// r becomes root
		r.children.push(l);
		r.level++;
		return r;
	}	

}

function heap_insert(nodes, el) {
	log('Heap insert nodes: ', nodes, ', element: ', el);
	return merge_tree_lists(nodes, [{
		value: el, 
		level: 0, 
		children: []
	}]);
}

function merge_tree_lists(l, r) {
	log('Merging tree lists l: ', l, ', r: ', r);
	if (!l) {
		return r;
	}

	if (!r) {
		return l;
	}

	let x = [];

	// assuming both l and r are correct fibonacci heaps so max 2 trees with the same level
	let idx = 0;
	while (l.length && r.length) {
		log(`${idx}. loop iteration`);
		if (l[0].level < r[0].level) {
			log('Case 1 l level is smaller than r level. Adding l[0]');
			x.push(l.shift());
		} else if (l[0].level > r[0].level) {
			log('Case 2 l level is bigger than r level. Adding r[0]');
			x.push(r.shift());
		} else {
			// l[0].level === r[0].level
			log('Case 3 l is the same as r level. Adding both');
			x.push(l.shift());
			x.push(r.shift());
		}
		++idx;
	}
	log(`End of loop after ${idx} iterations`);
	log('l: ', l, ', r: ', r);
	if (l.length) {
		x =  x.concat(l);
	} else if (r.length) {
		x =  x.concat(r);
	}

	log('x: ', x);

	// the situation is we have sorted by level (ascending) with max 2 neighbouring
	// trees with the same level

	let res = [];
	let t1, t2, t;
	while (x.length > 1) {
		if (x[0].level < x[1].level) {
			res.push(x.shift());
		} else {
			// with the same level
			t1 = x.shift();
			t2 = x.shift();
			x.unshift(merge_some_level_trees(t1, t2));
		}
	}

	// case 0 or 1

	while (x.length) {
		res.push(x.shift());
	}

	return res;
}

function delete_heap_min(nodes) {
	log(`Delete heap min l ${nodes.length}`);
	let [node, idx] = find_min(nodes);
	nodes.splice(idx, 1);
	return merge_tree_lists(nodes, node.children);
}

let heap = [];
// heap = heap_insert(heap, -2);
heap = heap_insert(heap,  2);
// heap = heap_insert(heap,  -3);
heap = heap_insert(heap,  3);
// heap = heap_insert(heap, -1);
heap = heap_insert(heap,  -10);
// heap = heap_insert(heap,  20);
heap = heap_insert(heap,  100);

heap = heap_insert(heap,  3);
heap = heap_insert(heap,  2);
heap = heap_insert(heap,  1);
heap = heap_insert(heap,  -100);
heap = heap_insert(heap,  -1);
heap = heap_insert(heap,  -4);
heap = heap_insert(heap,  4);
heap = heap_insert(heap,  5);
heap = heap_insert(heap,  6);

console.log(`Forrest of binomial trees ${heap.length}`);
for (let el of heap) {
	console.log(`${el.value} ${el.level}`);
}

while (heap.length) {
	let [node, idx] = find_min(heap);
	console.log(`Node ${node.value}, idx: ${idx}`);
	heap = delete_heap_min(heap);
}
