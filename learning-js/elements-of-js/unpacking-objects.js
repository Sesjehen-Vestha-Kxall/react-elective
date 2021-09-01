function unpackObject(obj, tabs = '') {
    const props = Object.getOwnPropertyNames(obj);

    let v;
    props.forEach(p => {
        v = obj[p];
        //v = Object.getOwnPropertyDescriptor(obj, p).value;

        if (v instanceof Object) {
            console.log(`${tabs}${p} ${Object.prototype.toString.call(v)}`);
            if (v instanceof Array)
                v.forEach((x, i) => console.log(`${tabs}\t[${i}]: ${x}`));
            else
                unpackObject(v, `${tabs}\t`);
        } else
            console.log(`${tabs}${p}: ${v}`);
    });
}

const book = {
    title: 'Data Structures and Algorithms - A Comprehensive Approach',
    author: `Kadis Etrama D' Reijar`,
    pages: 284,
    details: {
        isbn: 'NA',
        ansi: 'B08JHGHLFL'
    },
    constant_firm: () => { `EPA ${details.ansi}${details.isbn}` }
};

const pairKV = {
    name: 'Miguel',
    surname: 'Avila',
    age: 21,
    marital_status: 'Single',
    hobbies: ['Write Code', 'Watch YT Videos'],
    contact: {
        phones: ['300xxxxxx', '313xxxxxx'],
        address: 'unknown'
    }
};

unpackObject(pairKV);
//unpackObject(book);

pairKV.hobbies.forEach(function(x, i) {
    console.log(`[${i}]: ${x}`);
});