var app = new Vue({
    el: "#app",
    data: {
        title: "Contas a Pagar",
        menus: [
            {id: 0, name: "Listar Contas"},
            {id: 1, name: "Criar Conta"},
        ],
        activateView: 0,
        formType: 'insert',
        bill: {
            due_date: '',
            name: '',
            value: 0,
            done: 0
        },
        names: [
            'Conta de Luz',
            'Conta de Agua',
            'Conta de Telefone',
            'Conta de Internet',
            'Conta de Tv',
            'Conta de Um a Dez',
            'Conta de Cartão de Crédito',
            'Gasolina'
        ],
        bills: [
            {due_date: '20/08/2016', name: 'Conta de Luz', value: 25.99, done: 1},
            {due_date: '23/08/2016', name: 'Conta de Agua', value: 125.99, done: 0},
            {due_date: '21/08/2016', name: 'Conta de Telefone', value: 33.00, done: 0},
            {due_date: '25/08/2016', name: 'Conta de Internet', value: 215.25, done: 0},
            {due_date: '15/08/2016', name: 'Conta de Tv', value: 180.39, done: 0},
            {due_date: '05/08/2016', name: 'Conta de Um a Dez', value: 275.05, done: 0},
            {due_date: '22/08/2016', name: 'Conta de Cartão de Crédito', value: 625.00, done: 0}
        ],
        test: ''
    },
    computed: {
        status: function () {
            var count = 0;
            for (var i in this.bills) {
                if (!this.bills[i].done) {
                    count++;
                }
            }
            return !count ? 'Nada picaretado' : 'Tem que pagar ' + count + ' contas';
        }
    },
    methods: {
        showView: function (id) {
            this.activateView = id;
            if (id == 1) {
                this.formType = 'insert';
            }
        },
        submit: function () {
            if (this.formType == 'insert') {
                this.bills.push(this.bill);
            }
            this.bill = {
                due_date: '',
                name: '',
                value: 0,
                done: 0
            }
            this.activateView = 0;
        },
        loadBill: function (bill) {
            this.bill = bill;
            this.activateView = 1;
            this.formType = 'update';
        }
    }
});

Vue.filter('doneLabel', function (value){
    if (value === 0){
        return 'paga isso';
    }
    return 'isso ai';
});

app.$watch('test', function (newValue, oldValue) {
    console.log(newValue, oldValue);
});