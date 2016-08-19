var app = new Vue({
    el: "#app",
    data: {
        title: "Contas a Pagar",
        menus: [
            {id: 0, name: "Listar Contas"},
            {id: 1, name: "Criar Conta"}
        ],
        activateView: 2,
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
            {due_date: '15/08/2016', name: 'Conta de Tv', value: 180.39, done: 1},
            {due_date: '05/08/2016', name: 'Conta de Um a Dez', value: 275.05, done: 0},
            {due_date: '22/08/2016', name: 'Conta de Cartão de Crédito', value: 625.00, done: 0}
        ],
        count: 0
    },
    computed: {
        status: function () {
            if (this.bills.length === 0){
                this.count = false;
                return false;
            }
            this.count = 0;
            for (var i in this.bills) {
                if (!this.bills[i].done) {
                    this.count++;
                }
            }
            return this.count;
        }
    },
    methods: {
        showView: function (id) {
            this.activateView = id;
            if (id === 1) {
                this.formType = 'insert';
            }
        },
        submit: function () {
            if (this.formType === 'insert') {
                this.bills.push(this.bill);
            }
            this.bill = {
                due_date: '',
                name: '',
                value: 0,
                done: 0
            };
            this.activateView = 0;
        },
        loadBill: function (bill) {
            this.bill = bill;
            this.activateView = 1;
            this.formType = 'update';
        },
        deleteBill: function(bill){
            if (confirm('Apagar o tio Bill?')){
                this.bills.splice(this.bills.indexOf(bill), 1);
            }
        },
        payBill: function(bill){
            if (!bill.done && confirm('Pagar a conta '+bill.name+'?')){
                bill.done = 1;
            }
        },
        unpayBill: function(bill){
            if (bill.done && confirm('DesPagar a conta '+bill.name+'?')){
                bill.done = 0;
            }
        }
    }
});

Vue.filter('doneLabel', function (value){
    if (value === 0){
        return 'não paga';
    }
    return 'paga';
});

Vue.filter('colorStatus', function (){
    if (this.bills.length === 0){
        return 'Nenhuma conta cadastrada';
    }
    if (this.count === 0){
        return 'Nenhuma conta a pagar';
    }
    return 'Existem ' + this.count + ' contas a serem pagas';
});