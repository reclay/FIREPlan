let vm = new Vue({
    el: '#app',
    data() {
        return {
            invests: window.invests
        };
    },
    computed: {
        investsInfo() {
            let currentDate = moment();
            return this.invests.map(item => {
                let days = currentDate.diff(moment(item.startDate), 'days');
                let dayRate = item.rate / 100 / 365;
                let income = this.getRoundVal(item.account * days * dayRate);
                return Object.assign({}, item, {
                    income,
                    days
                });
            });
        }
    },
    methods: {
        getRoundVal(val) {
            return _.round(val, 2);
        }
    }
})