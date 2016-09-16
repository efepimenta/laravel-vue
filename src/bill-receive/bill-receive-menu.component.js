window.billReceiveMenuComponent = Vue.extend({
    template: `<nav>
            <ul>
                <li v-for="o in menus">
                    <a href="#" v-link="{name: o.routeName}"">{{o.name}}</a>
                </li>
            </ul>
        </nav>`,
    data: function () {
        return {
            menus: [
                {id: 0, name: "Listar Contas a Receber", routeName:'bill-receive.list'},
                {id: 1, name: "Criar Conta a Receber", routeName: 'bill-receive.create'}
            ]
        }
    }
});