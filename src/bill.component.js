window.billComponent = Vue.extend({
    template: `<nav>
            <ul>
                <li v-for="o in menus">
                    <a href="#" v-link="{name: o.routeName}"">{{o.name}}</a>
                </li>
            </ul>
        </nav>
        <router-view></router-view>`,
    data() {
        return {
            menus: [
                {id: 0, name: "Dashboard", routeName:'dashboard'},
                {id: 0, name: "Contas a pagar", routeName:'bill-pays'},
                {id: 1, name: "Contas a receber", routeName: 'bill-receives'}
            ]
        }
    }
});