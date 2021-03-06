window.billReceiveListComponent = Vue.extend({
    template: `<table border="1" cellpadding="10">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Vencimento</td>
                        <td>Nome</td>
                        <td>Valor</td>
                        <td>Recebido</td>
                        <td>Ações</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(idx,o) in bills">
                        <td>{{o.id}}</td>
                        <td>{{o.date_due}}</td>
                        <td>{{o.name}}</td>
                        <td>{{o.value | currency 'R$ ' 2}}</td>
                        <td :class="{'pago': o.done, 'naopago': !o.done}">
                            {{o.done | doneRecLabel}}
                    </td>
                    <td>
                        <a v-link="{name: 'bill-receive.update', params: {id: o.id}}">Edit</a> |
                        <a href="#" @click.prevent="deleteBill(o)">Del</a>
                    </td>
                </tr>
            </tbody>
        </table>`,
    data: function () {
        return {
            bills: []
        }
    },
    created: function () {
        var self = this;
        BillReceive.query().then(function (response) {
            self.bills = response.data;
        });
    },
    methods: {
        deleteBill: function (bill) {
            if (confirm('Apagar a conta ' + bill.name + ' ?')) {
                var self = this;
                BillReceive.delete({id: bill.id}).then(function (response) {
                    self.bills.$remove(bill);
                    self.$dispatch('change-status');
                });
            }
        }
    }
});