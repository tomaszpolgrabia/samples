"use strict";

const fs = require('fs');
const {EOL} = require('os');

function findPrimMST(graph) {
	let heap = []; 
	// we need to make a heap and remove it
	// one by one. Approach bottom up as it's more
	// efficient when we create heap from scratch
	// not just adding single element

	function testHeap() {
		console.log('Test', heap);
		for (let i = 0; i < heap.length; i++) {
			// console.log(`Testing ${i}`);
			if (2*i+1 < heap.length && heap[2*i+1].w < heap[i].w) {
				console.log(`Bad ${i} because ${2*i+1} has smaller value ${heap[i].w} > ${heap[2*i+1].w}`);
				return;
			}

			if (2*i+2 < heap.length && heap[2*i+2].w < heap[i].w) {
				console.log(`Bad ${i} because ${2*i+2} has smaller value ${heap[i].w} > ${heap[2*i+2].w}`);
				return;
			}
		}
	}

	function heapInsert(el) {
		heap.push(el);
		let idx = heap.length - 1;
		let t;
		while (idx >= 1) {
			let parent = (idx - 1) >> 1;
			if (heap[parent].w > heap[idx].w) {
				t = heap[idx];
				heap[idx] = heap[parent];
				heap[parent] = t;
				idx = parent;
			} else {
				break;
			}
		}
	}

	function popSmallest() {
		let val = heap[0];
		heap[0] = heap[heap.length - 1];
		heap.pop();
		// console.log('Popping first', val);

		// we need to fix from top to bottom
		// we need to take smallest from descendents

		let idx = 0;
		let t;
		while (idx < heap.length) {
			// console.log(`Checking idx ${idx}`);
			let smallest = heap[idx].w;
			if (2*idx + 1 < heap.length) {
				smallest = Math.min(smallest, heap[2*idx+1].w);
			}

			if (2*idx + 2 < heap.length) {
				smallest = Math.min(smallest, heap[2*idx+2].w);
			}

			// console.log(`Smallest ${smallest}, current: ${heap[idx].w}`);

			if (smallest >= heap[idx].w) {
				return val; // we're good
			}

			// we need to have something smaller we try first

			if (smallest === heap[2*idx+1].w) {
				t = heap[2*idx+1];
				heap[2*idx+1] = heap[idx];
				heap[idx] = t;
				// console.log(`Smallest ${2*idx+1}`);
				idx = 2*idx+1;

			} else {
				t = heap[2*idx+2];
				heap[2*idx+2] = heap[idx];
				heap[idx] = t;
				// console.log(`Smallest ${2*idx+2}`);
				idx = 2*idx+2;
			}
		}

		return null; // it should never go here except empty
	}

	// * TODO troubleshoot it adding bottom up
	// for (let u in graph.edges) {
//		for (let {v, w} of graph.edges[u]) {
			// heap.push({u, v, w}); // bottom up
			// heapInsert({u,v, w}); // top to bottom
		// }
	 //}

	//    0
	//  1   2 // left desc 2*i + 1, right 2*i + 2
	// 3 4 5 6

	// parent (i-1) >> 1;

	// console.log('Heap', heap);

	/**
	let t;
	for (let i = heap.length - 1; i >= 1; i--) {
		let idx = (i - 1) >> 1; // divided by 2
		console.log(`i: ${i}, idx: ${idx}`);
		console.log(`Parent: ${heap[idx].w}, item: ${heap[i].w}`);
		if (heap[idx].w > heap[i].w) {
			console.log(`Replaced`);
			t = heap[idx];
			heap[idx] = heap[i];
			heap[i] = t;
		}
	}

	for (let i = heap.length - 1; i >= 1; i--) {
		let idx = (i - 1) >> 1; // divided by 2
		console.log(`i: ${i}, idx: ${idx}`);
		console.log(`Parent: ${heap[idx].w}, item: ${heap[i].w}`);
		if (heap[idx].w > heap[i].w) {
			console.log(`Bad...`);
		}
	}
	**/
	// while (heap.length) {
	//	console.log(popSmallest());
	// }

	let remaining = new Set(graph.nodes);

	console.log('Nodes', remaining);
	let mst = {};
	let sets = 1;

	function addEdges(u) {
		// console.log(`Adding edges for ${u}`);
		for (let el of graph.edges[u]) {
			// console.log(`Edge`, el);
			if (typeof(mst[el.v]) === 'number') {
				continue;
			}
			heapInsert({u: u, v: el.v, w: el.w});
		}	
	}

	let sum = 0;
	while (remaining.size) {
		let u = null;
		for (let el of remaining) {
			u = el;
			break;
		}
		remaining.delete(u);
		mst[u] = sets;
		addEdges(u);
		while (true) {
			let r = popSmallest();
			console.log('Edge', r);
			if (!r) {
				break;
			}

			let {u,v,w} = r;
			if (typeof(mst[v]) === 'number') {
				console.log('Already added v...');
				continue;
			}

			mst[v] = sets;
			remaining.delete(v);
			sum += w;
			addEdges(v);
		}
	}

	console.log(`Weight ${sum}`);
	console.log('MST', mst);
	console.log('Remaining', remaining);
	

}

function processLine(graph, line) {
	// console.log(`Processing line ${line}`);
	let matches = 
		line.match(/([a-zA-Z]+) - ([a-zA-Z]+): ([0-9.]+)/);
	let u = matches[1];
	let v = matches[2];
	let w = Number.parseFloat(matches[3]);
	graph.nodes.add(u);
	graph.nodes.add(v);
	// bidirectional graph
	let outEdges = graph.edges[u] || [];
	outEdges.push({v, w});
	graph.edges[u] = outEdges;

	outEdges = graph.edges[v] || [];
	outEdges.push({v: u, w});
	graph.edges[v] = outEdges;
}

function main() {
	let buffer = "";
	let graph = {
		nodes: new Set(), // mapping name to idx
		edges: {}
	};
	let inputPath = process.argv.length > 2 ? process.argv[2] : null;
	console.log(`Input path ${inputPath}...`);
	let is = inputPath ? fs.createReadStream(inputPath) : process.stdin;

	is.on('data', (chunk) => {
		// console.log(`Reading chunk ${chunk}`);
		buffer += chunk;
	});

	is.on('end', () => {
		// console.log('Got end of data...');
		while (buffer.length > 0) {
			let idx = buffer.indexOf(EOL);
			if (idx < 0) {
				idx = buffer.length;
			}
			let line = buffer.slice(0, idx);
			processLine(graph, line);
			buffer = buffer.slice(idx + EOL.length);
		}

		is.close();
		findPrimMST(graph);
	});
}

main();