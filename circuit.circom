template Comparer() {
    signal private input a;
    signal output c;
    
    c<--a>=20
    c===1
}

component main = Comparer();