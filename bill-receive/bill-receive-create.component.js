window.billReceiveCreateComponent = Vue.extend({
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
            <label>Recebido?</label>
            <input type="checkbox" v-model="bill.done">
            <br>
            <input type="submit" value="Enviar">
        </form>`,
    data: function () {
        return {
            formType : 'insert',
            names: [
                'Serviço de paçoca',
                'Agua de Coco',
                'Telemarketing',
                'Efeitos sonoros'
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
        if (this.$route.name === 'bill-receive.update'){
            this.formType = 'update';
            this.getBill(this.$route.params.id);
        }
    },
    methods: {
        submit: function () {
            var self = this;
            if (this.formType === 'insert') {
                BillReceive.save({}, this.bill).then(function (response) {
                    self.$dispatch('change-status');
                    self.$router.go({name: 'bill-receive.list'});
                })
            } else {
                BillReceive.update({id: this.bill.id}, this.bill).then(function (response) {
                    self.$dispatch('change-status');
                    self.$router.go({name: 'bill-receive.list'});
                })
            }
        },
        getBill: function (id) {
            var self = this;
            BillReceive.get({id: id}).then(function (response) {
                self.bill = response.data;
            });
        }
    }
});