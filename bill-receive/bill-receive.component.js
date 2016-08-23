window.billReceiveComponent = Vue.extend({
    components: {
        'bill-receive-menu-component': billReceiveMenuComponent
    },
    template: `<style type="text/css">
            .pago{
                color: blue;
            }
            .naopago{
                color: orange;
            }
            .naoexiste{
                color: silver;
            }
        </style>
        <h1>{{ title }}</h1>
        <h3 :class="{'naoexiste': status === false, 'pago': status === 0, 'naopago': status > 0}">{{status | colorRecStatus}}</h3>
        <bill-receive-menu-component></bill-receive-menu-component>
        <router-view></router-view>`,
    data: function () {
        return {
            title: "Contas a Receber",
        }
    },
    computed: {
        status: function () {
            var bills = this.$root.$children[0].billsReceive;
            if (bills.length === 0) {
                return false;
            }
            var count = 0;
            for (var i in bills) {
                if (!bills[i].done) {
                    count++;
                }
            }
            return count;
        }
    }
});