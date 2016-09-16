const names = [
    'Conta de Luz',
    'Conta de Agua',
    'Conta de Telefone',
    'Conta de Internet',
    'Conta de Tv',
    'Conta de Um a Dez',
    'Conta de Cartão de Crédito',
    'Gasolina'
];

window.billPayCreateComponent = Vue.extend({
    template: `<form name="form" @submit.prevent="submit">
            <label>Vencimento</label>
            <input type="text" v-model="bill.date_due">
            <br>
            <label>Nome:</label>
            <select v-model="bill.name">
                <!--<option v-for="o in names" v-bind:value="o">-->
                <option v-for="o in names" :value="o">
                    {{o}}
                </option>
            </select>
            <br>
            <label>Valor:</label>
            <input type="text" v-model="bill.value">
            <br>
            <label>Pago?</label>
            <input type="checkbox" v-model="bill.done">
            <br>
            <input type="submit" value="Enviar">
        </form>`,
    data: function () {
        return {
            formType : 'insert',
            names: names,
            bill: {
                due_date: '',
                name: '',
                value: 0,
                done: false
            }
        }
    },
    created: function () {
        if (this.$route.name === 'bill-pay.update'){
            this.formType = 'update';
            this.getBill(this.$route.params.id);
        }
    },
    methods: {
        submit: function () {
            var self = this;
            if (this.formType === 'insert') {
                BillPay.save({}, this.bill).then(function (response) {
                    self.$dispatch('change-status');
                    self.$router.go({name: 'bill-pay.list'});
                })
            } else {
                BillPay.update({id: this.bill.id}, this.bill).then(function (response) {
                    self.$dispatch('change-status');
                    self.$router.go({name: 'bill-pay.list'});
                })
            }
        },
        getBill: function (id) {
            var self = this;
            BillPay.get({id: id}).then(function (response) {
                self.bill = response.data;
            });
        }
    }
});