Vue.http.options.root = 'http://192.168.10.10:8000/api';

window.BillPay = Vue.resource('bills{/id}',{},{
    total: {
        method: 'GET',
        url: 'bills/total'
    }
});

window.BillReceive = Vue.resource('bills-receive{/id}',{},{
    total: {
        method: 'GET',
        url: 'bills-receive/total'
    }
});