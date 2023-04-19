<template>
    <div>
        <!-- Use the header component in your template -->
        <!-- Your app content goes here -->
        <div class="container">
            <div class="left-div">
                <div v-for="category in categories" :key="category.id">
                    <Category
                        :title="category.title"
                        :description="category.description"
                        v-bind="t1"
                    ></Category>
                </div>
            </div>
            <div class="right-div">
                <Tutorial
                    title="Tutorial 1"
                    imageUrl="https://elcomercio.pe/resizer/wtXe3Cbf-Mzeb2pfn2XQiskyL7k=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/LVRUHV5RPZBWLIZD7Y2VLRNI3A.jpg"
                    description="Como preparar almuerzo"
                />
                <Tutorial
                    title="Tutorial 2"
                    imageUrl="https://s.yimg.com/ny/api/res/1.2/WfAIcTxGIhQZIMOSjLPohw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTg1Mw--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/f4130c376e8c1633b900e6006fea8d89"
                    description="Como preparar almuerzo"
                />
                <Tutorial
                    title="Tutorial 3"
                    imageUrl="https://cdn.memegenerator.es/imagenes/memes/full/0/27/277525.jpg"
                    description="Como preparar almuerzo"
                />
                <Tutorial
                    title="Tutorial 4"
                    imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU1x8GAt38EPz0EXctHyXoGp6iT9gV96nZWQ&usqp=CAU"
                    description="Como preparar almuerzo"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import Tutorial from "./Tutorial.vue";
    import Category from "./Category.vue";

    export default {
        name: "LibraryComponent",

        components: {
            Tutorial,
            Category, // Register the header component in your Vue instance
        },
        data() {
            return {
                title: "Library UPC",
                categories: [],
            };
        },
        beforeMount() {
            this.categories = [
                { title: "titulo1", description: "descripcion1" },
                { title: "titulo2", description: "descripcion2" },
            ];
        },

        // Your app logic goes here
    };
</script>

<style scoped>
    /* Your app styles go here */

    .container {
        display: grid;
        grid-template-columns: 25% 75%;
    }

    .left-div {
        background-color: #ffcfcf; /* change as needed */
    }

    .right-div {
        background-color: #ebebeb; /* change as needed */
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .left-div,
    .right-div {
        padding: 10px;
        margin: 10px;
    }
</style>
