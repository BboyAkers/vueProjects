new Vue({
    el: '#exercise',
    data: {
        color: 'red',
        falsey: true,
        height: 100,
        changeEffect: false,
        heightClass: 'heights',
        colorClass: 'red'
    },
    methods: {
        startEffect: function () {
            setInterval(function () {
                //Alternate the  highlight or shrink class on each new setInterval
                // highlight: this.
            }, 500);
        }
    }
});
