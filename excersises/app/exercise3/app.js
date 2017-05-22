new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        method: {
            result(){
                return this.value < 37 ? 'not There yet' : 'done'
            }
        },
        watch: {
            value: function(){
                var vm = this;
                setTimeout(function(){
                    vm.value = 0;
                }, 5000)
            }
        }
    });