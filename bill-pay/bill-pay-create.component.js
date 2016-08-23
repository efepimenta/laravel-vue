window.billPayCreateComponent = Vue.extend({
    template: `<form name="form" @submit.prevent="submit">
            <label>Vencimento</label>
            <input type="text" v-model="bill.due_date">
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
            this.getBill(this.$route.params.index);
        }
    },
    methods: {
        submit: function () {
            if (this.formType === 'insert') {
                this.$root.$children[0].billsPay.push(this.bill);
            }
            this.bill = {
                due_date: '',
                name: '',
                value: 0,
                done: false
            };
            this.$router.go({name: 'bill-pay.list'});
        },
        getBill: function (index) {
            this.bill = this.$root.$children[0].billsPay[index];
        }
    }
});