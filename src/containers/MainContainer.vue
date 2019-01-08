<template>
    <!--style="background-color: #4A4E5A"-->
    <div class="wrapper">
        <!--<DefaultHeader></DefaultHeader>-->
        <!--<DefaultNav></DefaultNav>-->
        <router-view></router-view>
        <!--<DefaultFooter></DefaultFooter>-->
    </div>
</template>


<script>
    import DefaultHeader from './components/DefaultHeader';
    import DefaultNav from  './components/DefaultNav'
    import DefaultFooter from  './components/DefaultFooter'
    export default {
        name: 'MainContainer',
        components: {
            DefaultHeader,
            DefaultNav,
            DefaultFooter
        },
        computed: {}
    }
</script>