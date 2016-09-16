var mainComponent = Vue.extend({
    components: {
        'bill-component': billComponent
    },
    template: '<bill-component></bill-component>'
});

let router = new VueRouter();

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
            '/:id/update': {
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
            '/:id/update': {
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