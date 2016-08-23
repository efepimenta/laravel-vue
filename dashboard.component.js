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
<p>Saldo das contas a pagar: {{pagar | currency '$ ' 2}}</p>
<p>Saldo das contas a receber: {{receber | currency '$ ' 2}}</p>
<p :class="{'positivo': receber > pagar, 'negativo': pagar > receber}">Saldo total: {{receber - pagar | currency '$ ' 2}}</p>
`,
    computed: {
        pagar: function () {
            var bills = this.$root.$children[0].billsPay;
            var total = 0;
            for (var i in bills) {
                if (!bills[i].done) {
                    total += bills[i].value;
                }
            }
            return total;
        },
        receber: function () {
            var bills = this.$root.$children[0].billsReceive;
            var total = 0;
            for (var i in bills) {
                if (!bills[i].done) {
                    total += bills[i].value;
                }
            }
            return total;
        }
    }
});