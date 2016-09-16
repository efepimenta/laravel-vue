window.billPayComponent = Vue.extend({
    components: {
        'bill-pay-menu-component': billPayMenuComponent
    },
    template: `<style type="text/css">
            .pago{
                color: green;
            }
            .naopago{
                color: red;
            }
            .naoexiste{
                color: gray;
            }
        </style>
        <h1>{{ title }}</h1>
        <h3 :class="{'naoexiste': status === false, 'pago': status === 0, 'naopago': status > 0}">{{status | colorPayStatus}}</h3>
        <bill-pay-menu-component></bill-pay-menu-component>
        <router-view></router-view>`,
    data: function () {
        return {
            title: "Contas a Pagar",
            status: false
        }
    },
    created: function () {
        this.updateStatus();
    },
    methods : {
        calculateStatus: function (bills) {
            if (bills.length === 0) {
                this.status = false;
            }
            var count = 0;
            for (var i in bills) {
                if (!bills[i].done) {
                    count++;
                }
            }
            return this.status = count;
        },
        updateStatus: function () {
            var self =this;
            BillPay.query().then(function (response) {
                self.calculateStatus(response.data);
            });
        }
    },
    events: {
        'change-status' : function () {
            this.updateStatus();
        }
    }
});