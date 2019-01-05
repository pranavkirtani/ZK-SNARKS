# ZK-SNARK Implementation in Javascript

This code is an example of ZK-SNARKS implementation in javascript.

### Prerequisites
* Node.js

### Installations
Run the the following commands to install snarks.js and circom

* `npm install -g circom`

* `npm install -g snarkjs`

### Running the setup

#### Compiling the circuit
`circom circuit.circom -o mycircuit.json`

#### Running the javascript code
The code will check to see if a prover knows a number whose value is greater than or equal to 20. the input value can be changed to test this code
In our example, we are using 21

`const input = {
      "a": 21
}
`

To run the code use the following command

` node index.js`
