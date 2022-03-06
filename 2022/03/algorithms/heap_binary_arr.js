"use strict";

// const fs = require('fs');
// const {EOL} = require('os');

//    0
//  1   2
// 3 4 5 6

//  |--- i ---|
// 2*i+1   2*i+2

function check_heap(arr) {
	// parent has to be smaller or equal
	let n = arr.length;
	for (let i = n - 1; i > 0; i--) {
		let idx = (i-1) >> 1;
		if (heap[idx] > heap[i]) {
			return [idx, i];
		}
	}

	return [-1, -1];
}

function push_up(heap, i) {
	let idx, t;
	while (i > 0) {
		idx = (i - 1) >> 1;
		console.log(`Checking ${i} with parent ${idx}. v ${heap[i]} vs p ${heap[idx]}`);
		if (heap[idx] > heap[i]) {
			console.log(`Replacing ${i}(${heap[i]}) with ${idx}(${heap[idx]})`);
			t = heap[idx];
			heap[idx] = heap[i];
			heap[i] = t;
			i = idx;
		} else {
			break;
		}
	}
}

function push_down(heap, i) {
	let t;

	while (true) {
		if (i + 1 >= heap.length) {
			// we are the last. No children
			return;
		}

		if ((2*i + 1 >= heap.length || heap[i] < heap[2*i+1]) 
				&& (2*i + 2 >= heap.length || heap[i] < heap[2*i+2])) {
			// heap conditions are right
			return;
		}

		// let's replace it with the smallest

		//  -1       5
		// 0  1 ->  0  1

		if (2*i + 2 < heap.length) {
			if (heap[2*i+1] > heap[2*i+2]) {
				// heap[2*i+2] is smallest
				t = heap[2*i+2];
				heap[2*i+2] = heap[i];
				heap[i] = t;
				i = 2*i + 2;
			} else {
				// heap[2*i+1] is smallest
				t = heap[2*i+1];
				heap[2*i+1] = heap[i];
				heap[i] = t;
				i = 2*i + 1;
			}
		} else {
			// we have only one case possible
			// heap[2*i+1] is smallest
				t = heap[2*i+1];
				heap[2*i+1] = heap[i];
				heap[i] = t;
				i = 2*i + 1;
		}
	}

}

function insert_heap(heap, el) {
	let n = heap.length;
	heap[n] = el;
	push_up(heap, n);
}

function pop_heap(heap) {
	let n = heap.length;
	let el = heap[0];
	heap[0] = heap[n-1];
	heap.pop();
	push_down(heap, 0);
	return el;
}

function build_heap(arr) {
	const n = arr.length;
	const heap = new Array(n);
	for (let i = 0; i < n; i++) {
		heap[i] = arr[i];
	}

	let t;
	for (let i = n - 1; i > 0; i--) {
		push_up(heap, i);
	}

	return heap;
}

const arr = [6, 5, 4, 3, 2, 1, 0];
console.log('Heap 1', arr);
const heap = build_heap(arr);

insert_heap(heap, 7);
insert_heap(heap, 8);
insert_heap(heap, 9);
insert_heap(heap, 10);

console.log('Heap 2', heap);
console.log('Check heap', check_heap(heap));

while (heap.length) {
	console.log(pop_heap(heap));
}