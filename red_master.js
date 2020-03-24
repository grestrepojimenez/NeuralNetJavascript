
let settings = asignar_valores()


let neuralNet = new Array;

for (i=0; i<settings.netStruct.length-1; i++){ 
		neuralNet[i] = {
		"sesgo" : matrix(settings.netStruct[i], 1).fill(1),
		"pesos_sinapticos": matrix(settings.netStruct[i], settings.netStruct[i+1]),
		"errors": matrix(settings.netStruct[i+1], settings.netStruct[i+2]),
	}
}
	for (i=0; i<settings.netStruct.length-1; i++){ 
 		// neuralNet[i].pesos_sinapticos[settings.netStruct[i]].map( ()=> Math.round(Math.random())); 
 		// neuralNet[i].errors = matrix(settings.netStruct[i], settings.netStruct[i]+1 ).fill(1)
 	}











function asignar_valores(){
	let	settings = {
		"error" : 1,
		"epocas" : 0,
		"max_epocas":  10000,
		"capas_ocultas" : 2,
		"salida" : [0, 1, 1, 0, 1, 0, 0, 1],
		"patron" : [[0, 0, 0],[0, 0, 1],[0, 1, 0],[0, 1, 1],[1, 0, 0],[1, 0, 1],[1, 1, 0],[1, 1, 1]],
		"neuronas_1_capa" : 30,
		"neuronas_2_capa": 20,
		"netStruct" : [3, 30, 20, 1] //entredas, capa 1, capa2, salidas
	}

	return settings
}


function matrix(m, n) {
  return Array.from({
    // generate array of length m
    length: m
    // inside map function generate array of size n
    // and fill it with `0`
  }, () => new Array(n).fill(2));
};

