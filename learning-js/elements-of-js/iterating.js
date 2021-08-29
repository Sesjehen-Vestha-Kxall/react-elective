const OBJECT = {
    arr: new Array(10_000)
};

function timeIt(f) {
    console.time(`${f.name}`);
    f();
    console.timeEnd(`${f.name}`);
};

const traditional = () => {
    for (let i = 0; i < OBJECT.arr.length; i++) {
        OBJECT.arr[i] = 'bad';
    }
};

const withTempLim = () => {
    let lim = OBJECT.arr.length;
    for (let i = 0; i < lim; i++) {
        OBJECT.arr[i] = 'gud';
    }
};

const withForeach = () => {
    OBJECT.arr.forEach(function(_, i) {
        this[i] = 'foreach';
    }, OBJECT.arr);
};

const withMap = () => {
    OBJECT.arr = OBJECT.arr.map(_ => 'with map copy');
};

timeIt(traditional); //18.356ms
timeIt(withTempLim); //3.479ms
timeIt(withForeach); //2.694ms
timeIt(withMap);     //6.626ms
