window.dashboardComponent = Vue.extend({
    template: `<style type="text/css">
            .positivo{
                color: blue;
            }
            .negativo{
                color: red;
            }
        </style>
<h2>Dashboard</h2>
<p>Saldo das contas a pagar: {{totalPay | currency '$ ' 2}}</p>
<p>Saldo das contas a receber: {{totalReceive | currency '$ ' 2}}</p>
<p :class="{'positivo': totalReceive > totalPay, 'negativo': totalPay > totalReceive}">Saldo total: {{totalReceive - totalPay | currency '$ ' 2}}</p>
`,
    data: function () {
        return {
            totalPay: 0,
            totalReceive: 0
        }
    },
    created: function () {
        this.updateTotalPay();
        this.updateTotalReceive();
    },
    methods:{
        updateTotalPay: function () {
            var self = this;
            BillPay.total().then(function (response) {
                self.totalPay = response.data.total;
            });
        },
        updateTotalReceive: function () {
            var self = this;
            BillReceive.total().then(function (response) {
                self.totalReceive = response.data.total;
            });
        }
    }
});