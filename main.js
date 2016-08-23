var mainComponent = Vue.extend({
    components: {
        'bill-component': billComponent
    },
    template: '<bill-component></bill-component>',
    data: function () {
        return {
            billsPay: [
                {due_date: '20/08/2016', name: 'Conta de Luz', value: 25.99, done: true},
                {due_date: '23/08/2016', name: 'Conta de Agua', value: 125.99, done: false},
                {due_date: '21/08/2016', name: 'Conta de Telefone', value: 33.00, done: false},
                {due_date: '25/08/2016', name: 'Conta de Internet', value: 215.25, done: false},
                {due_date: '15/08/2016', name: 'Conta de Tv', value: 180.39, done: true},
                {due_date: '05/08/2016', name: 'Conta de Um a Dez', value: 275.05, done: false},
                {due_date: '22/08/2016', name: 'Conta de Cartão de Crédito', value: 625.00, done: false}
            ],
            billsReceive: [
                {due_date: '20/08/2016', name: 'Serviço de paçoca', value: 150.99, done: true},
                {due_date: '23/08/2016', name: 'Agua de Coco', value: 33.99, done: false},
                {due_date: '25/08/2016', name: 'Telemarketing', value: 1580.25, done: false},
                {due_date: '15/08/2016', name: 'Efeitos sonoros', value: 1380.39, done: true},
                {due_date: '05/08/2016', name: 'Serviço de paçoca', value: 150.05, done: false},
                {due_date: '22/08/2016', name: 'Efeitos sonoros', value: 52.00, done: false}
            ]
        };
    }
});

var router = new VueRouter();

router.map({
    'bill-pays': {
        name: 'bill-pays',
        component: billPayComponent,
        subRoutes: {
            '/': {
                name: 'bill-pay.list',
                component: billPayListComponent
            },
            '/create': {
                name: 'bill-pay.create',
                component: billPayCreateComponent
            },
            '/:index/update': {
                name: 'bill-pay.update',
                component: billPayCreateComponent
            }
        }
    },
    'bill-receives': {
        name: 'bill-receives',
        component: billReceiveComponent,
        subRoutes: {
            '/': {
                name: 'bill-receive.list',
                component: billReceiveListComponent
            },
            '/create': {
                name: 'bill-receive.create',
                component: billReceiveCreateComponent
            },
            '/:index/update': {
                name: 'bill-receive.update',
                component: billReceiveCreateComponent
            }
        }
    },
    'dashboard': {
        name: 'dashboard',
        component: dashboardComponent
    },
    '*': {
        name: 'dashboard',
        component: dashboardComponent
    }
});

router.start({
    components: {
        'main-component': mainComponent
    }
}, '#app');

router.redirect({
    '*': '/dashboard'
});