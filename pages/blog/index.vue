<template>
    <section>
        <h1>最新記事</h1>
        <ul>
            
        </ul>
    </section>
</template>

<script>
export default {
    data: function(){
        var newarticle = [{$store.state.title, $store.state.content}];
        return{
            newarticles: [newarticle[1], newarticle[2], newarticle[3], newarticle[4], newarticle[5]],
        };
    }
}
</script>