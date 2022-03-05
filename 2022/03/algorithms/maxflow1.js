"use strict";

const fs = require('fs');
const {EOL} = require('os');
const eps = 1e-6;

function increasingFlowPath(c, s, t) {
	console.log(`Look for increasing flow path ${s} -> ${t}`);
	let queue = [];
	let processed = new Set();

	queue.unshift(s);
	processed.add(s);
	let precedessor = {vi: null}; // i -> precedessor

	while (queue.length) {
		let vi = queue.pop();
		if (vi === t) {
			break;
		}

		for (let i = 0; i < c.length; i++) {
			if (Math.abs(c[vi][i]) > eps && !processed.has(i)) {
				precedessor[i] = vi;
				queue.unshift(i);
				processed.add(i);
			}
		}
	}

	if (!precedessor[t]) {
		return {path: [], flow: 0};
	}

	let path = [];
	let i = t;
	path.push(t);
	let flow = Infinity;
	while (typeof(precedessor[i]) === 'number') {
		console.log(`Precedessor ${i} is ${precedessor[i]}`);
		flow = Math.min(flow, c[precedessor[i]][i]);
		path.unshift(precedessor[i]);
		i = precedessor[i];
	}

	return {path, flow};

}

function findMaximumFlow(graph) {
	let nodes = [];
	let m = {};
	for (let el of graph.nodes) {
		nodes.push(el);
	}

	for (let i = 0; i < nodes.length; i++) {
		m[nodes[i]] = i;
	}

	const n = nodes.length;
	let c = new Array(n);
	let f = new Array(n);
	for (let i = 0; i < n; i++) {
		c[i] = new Array(n);
		f[i] = new Array(n);
	}

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			c[i][j] = 0;
			f[i][j] = 0;
		}
	}

	for (let v in graph.edges) {
		for (let {node, weight} of graph.edges[v]) {
			let vi = m[v]
			let nodei = m[node];
			c[vi][nodei] = weight;
		}
	}

	console.log('C weights', c);

	// let's find increasing flow path
	let p, fl;
	do {
		let {path, flow} = increasingFlowPath(c, m[graph.source], m[graph.target]);
		p = path;
		fl = flow;
		console.log(`Increasing flow ${flow} path ${path}`);	
		if (path) {
			// new increasing flow path
			// f increase
			// c decrease

			for (let i = 1; i < path.length; i++) {
				c[path[i-1]][path[i]] -= flow;
				f[path[i-1]][path[i]] += flow;
			}

		}
	} while (fl);

	console.log(`Flow`, c);

	let flow = 0;
	for (let i = 0; i < nodes.length; i++) {
		flow += f[m[graph.source]][i];
	}

	return flow;
}

function sourceCmdLine(ctx, cmdLine) {
	ctx.source = cmdLine.slice(
		'source'.length,
		cmdLine.indexOf(';')
	).trim();
}

function targetCmdLine(ctx, cmdLine) {
	ctx.target = cmdLine.slice(
		'target'.length,
		cmdLine.indexOf(';')
	).trim();
}

function edgeCmdLine(ctx, cmdLine) {
	let edgeLine = cmdLine.slice(
		'edge'.length,
		cmdLine.indexOf(';')
	).trim();
	console.log(`Edge line ${edgeLine}`);

	const matches = edgeLine.match(/^([a-zA-Z]*) -> ([a-zA-Z]*): ([0-9.]*)$/);
	// console.log('Matches', matches);
	const v = matches[1];
	const z = matches[2];
	const weight = Number.parseFloat(matches[3]);

	console.log(`Parsed ${v} ->  ${z} : ${weight}`);

	ctx.nodes.add(v);
	ctx.nodes.add(z);
	let targetEdges = ctx.edges[v] || [];
	targetEdges.push({node: z, weight});
	ctx.edges[v] = targetEdges;

}

function processCmdLine(ctx, cmdLine) {
	console.log(`Processing command line ${cmdLine}`);
	if (cmdLine.startsWith('source')) {
		sourceCmdLine(ctx, cmdLine);
	} else if (cmdLine.startsWith('target')) {
		targetCmdLine(ctx, cmdLine);
	} else if (cmdLine.startsWith('edge')) {
		edgeCmdLine(ctx, cmdLine);
	}
}

console.log(`Process argv: ${process.argv}`);

const inputPath  = process.argv.length > 2 ? process.argv[2] : '-';
const outputPath = process.argv.length > 3 ? process.argv[3] : '-';

console.log(`Input path ${inputPath}, output path: ${outputPath}`);

const inputStream = inputPath === '-' 
	? process.stdin
	: fs.createReadStream(inputPath);

// const outputStream = outputPath === '-' 
// 	? process.stdout
//	: fs.createWriteStream(outputStream);

let inputBuffer = "";
let ctx = {
	source: '',
	target: '',
	edges: {},
	nodes: new Set()
};

function processChunk(chunk) {
	inputBuffer += chunk;
	console.log(`Chunk: ${chunk}`);
	let eolIdx;
	do {
		eolIdx = inputBuffer.indexOf(EOL);
		if (eolIdx < 0 && !chunk) {
			eolIdx = inputBuffer.length;
		}

		let cmdLine = null;
		if (eolIdx >= 0) {
			console.log(`We got new line ${eolIdx}`);
			cmdLine = inputBuffer.slice(0, eolIdx);
			processCmdLine(ctx, cmdLine);
			inputBuffer = inputBuffer.slice(eolIdx+EOL.length);
		}
	} while (eolIdx >= 0 && inputBuffer.length);
}

inputStream.on('data', (chunk) => {
	processChunk(chunk);
});

inputStream.on('end', (chunk) => {
	console.log(`end chunk ${chunk}`);
	processChunk(chunk);
	console.log('Got following graph', ctx);

	for (let v in ctx.edges) {
		for (let {node, weight} of ctx.edges[v]) {
			console.log(`${v} ${node} : ${weight}`);
		}
	}

	let mflow = findMaximumFlow(ctx);

	console.log(`Maximum flow is ${mflow}`);

});
