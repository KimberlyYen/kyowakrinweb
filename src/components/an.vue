<template>
    <h1>123</h1>
    <!-- <div>123</div>
    <div v-bind:class="ABC">English</div> -->
</template>

<script>
    new Vue({
    el: '#exmaple',
    data: function () {
        return {
        isSelected: true,
        ABC: 'div0',
        }
    },
    methods: {
        setColor (color) {
        let style
        switch(color) {
            case 'red':
            style = {open}
            break
            case 'blue':
            style = {"background-color": "blue"}
            break
            case 'orange':
            style = {"background-color": "orange"}
            break
        }
        return style
        }
    }
    })
</script>

<style>
    .div0 {
    width:100px;
    height:200px;
    background:#ea5504;
    position:absolute;
    margin: 0px;
    right: -100px;
    }
    .div1 {
    width:100px;
    height:200px;
    background:#ea5504;
    position:absolute;
    margin: 0px;
    right: 0px;
    animation: open 3s 1;
    }
    .div2 {
    width:100px;
    height:200px;
    background:#ea5504;
    position:absolute;
    margin: 0px;
    right: 100px;
    animation: close 3s 1;
    }

    @keyframes open {
    from   {right: 0px;}
    to     {right: 100px;}
    }
    @keyframes close {
    from   {right: 100px;}
    to     {right: 0px;}
    }
</style>