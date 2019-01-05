const zkSnark = require("snarkjs");
var fs=require("fs")
const {stringifyBigInts, unstringifyBigInts} = require("./node_modules/snarkjs/src/stringifybigint.js");
const circuitDef = JSON.parse(fs.readFileSync("mycircuit.json", "utf8"));
const circuit = new zkSnark.Circuit(circuitDef);
const setup = zkSnark.original.setup(circuit);
fs.writeFileSync("myCircuit.vk_proof", JSON.stringify(stringifyBigInts(setup.vk_proof)), "utf8");
fs.writeFileSync("myCircuit.vk_verifier", JSON.stringify(stringifyBigInts(setup.vk_verifier)), "utf8");
setup.toxic

const input = {
    "a": 21
}
const witness = circuit.calculateWitness(input);
const vk_proof = JSON.parse(fs.readFileSync("myCircuit.vk_proof", "utf8"));
const {proof, publicSignals} = zkSnark.original.genProof(unstringifyBigInts(vk_proof), unstringifyBigInts(witness));
const vk_verifier = JSON.parse(fs.readFileSync("myCircuit.vk_verifier", "utf8"));

if (zkSnark.original.isValid(unstringifyBigInts(vk_verifier), unstringifyBigInts(proof), unstringifyBigInts(publicSignals))) {
    console.log("The proof is valid");
} else {
    console.log("The proof is not valid");
}