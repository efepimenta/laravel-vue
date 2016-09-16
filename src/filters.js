// Vue.filter('donePayLabel', function (value) {
//     if (value === false) {
//         return 'não paga';
//     }
//     return 'paga';
// });

Vue.filter('donePayLabel', (value) => value == 0 ? "não paga" : "paga");

Vue.filter('doneRecLabel', function (value) {
    if (value === false) {
        return 'não recebida';
    }
    return 'recebida';
});

Vue.filter('colorPayStatus', function (value) {
    if (value === false) {
        return 'Nenhuma conta cadastrada';
    }
    if (value === 0) {
        return 'Nenhuma conta a pagar';
    }
    return 'Existem ' + value + ' contas a serem pagas';
});

Vue.filter('colorRecStatus', (value) => {
    if (value === false) {
        return 'Nenhuma conta cadastrada';
    }
    if (value === 0) {
        return 'Nenhuma conta a receber';
    }
    return 'Existem ' + value + ' contas a serem recebidas';
});

// Vue.filter('colorRecStatus', function (value) {
//     if (value === false) {
//         return 'Nenhuma conta cadastrada';
//     }
//     if (value === 0) {
//         return 'Nenhuma conta a receber';
//     }
//     return 'Existem ' + value + ' contas a serem recebidas';
// });