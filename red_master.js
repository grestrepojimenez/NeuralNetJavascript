

let settings = assignValues()

let neuralNet = createNet(settings)

// while (settings.error >0.01 && settings.iterations<settings.maxIterations){
	// for(j=0; j< settings.trainingInput.length; j++){
		let j = 0
		neuralNet = forwardPropagation(settings, neuralNet, j)
		// neuralNet = backpropagtion(settings, neuralNet, j)
		// neuralNet = synapticWeightsRecalc(settings, neuralNet)
	// }
// }








function assignValues(){
	let	settings = {
		"error" : 1,
		"iterations" : 0,
		"maxIterations":  10000,
		"hiddenLayers" : 2,
		"trainingOutput" : [0, 1, 1, 0, 1, 0, 0, 1],
		"trainingInput" : [[0, 0, 0],[0, 0, 1],[0, 1, 0],[0, 1, 1],[1, 0, 0],[1, 0, 1],[1, 1, 0],[1, 1, 1]],
		"netStruct" : [3, 30, 20, 1] //number of inputs, neurons 1 layer, neurons 2 layer, outputs
	}

	return settings
}


function matrix(m, n) {
  return Array.from({ // generate array of length m
  	length: m
    // inside map function generate array of size n
}, () => new Array(n).fill(2))
}

function matrixRandom(m, n) {
	return Array.from({
		length: m
	}, () => new Array(n).fill().map(() => Math.round(Math.random())))
}

function ones(m, n) {
	return Array.from({
		length: m
	}, () => new Array(n).fill(1))
}


function createNet(settings){
	let neuralNet = new Array
	for (i=0; i<settings.netStruct.length; i++){ 
		neuralNet[i] = {
			"bias" : matrix(settings.netStruct[i], 1).fill(1),
			"synapticWeights": matrixRandom(settings.netStruct[i+1], settings.netStruct[i]),
			"errors": [],
			"outputs" : [],
		}
	}
	for (i=1; i<settings.netStruct.length; i++){
		if (neuralNet[i] == settings.netStruct.length){
			neuralNet[i].errors = 1
		}
		else {
			neuralNet[i].errors  = ones(settings.netStruct[i], settings.netStruct[i+1])
		}
	}
	return neuralNet

}


function forwardPropagation(settings, neuralNet, j) {




	neuralNet[0].outputs = settings.trainingInput[j]

	for (i = 1; i< settings.netStruct.length; i++){
    neuralNet[i].outputs=dotproduct(neuralNet[i-1].synapticWeights,neuralNet[i-1].outputs);  // crea una estructura de tamaño n-1 con matrices de tamaños i, i+1
   // neuralNet[i].outputs=logsig(neuralNet[i].outputs); //haya sigmoide de cada salida de la neurona
  
  }

	return neuralNet;
}

function logsig(n){
	return (1 / (1 + Math.exp(-n)));
}





var f = (a, b) => [].concat(...a.map(a => b.map(b => [].concat(a, b))));
var cartesian = (a, b, ...c) => b ? cartesian(f(a, b), ...c) : a;


mmultiply = function(a,b) {
	return a.map(function(x,i) {
		return transpose(b).map(function(y,k) {
			return dotproduct(x, y)
		});
	});
}

function dotproduct (a,b) {
	return a.map(function(x,i) {
		return a[i] * b[i];
	}).reduce(function(m,n) { return m + n; });
}

transpose = function(a) {
	return a[0].map(function(x,i) {
		return a.map(function(y,k) {
			return y[i];
		})
	});
}
