app.component('photo-item', {
    props: {
        pictures: {
            type: Object,
            require: true
        },
        index: {
            type: Number,
            require: true
        }
    },
    template: `
            <div class="flex flex-row space-x-5">
            <button @click="showFavIcon(index)" @dblclick="toggleModal(index)">
                        <img v-bind:src="pictures.path" width="100" height="1000">
                    </button>
                <div class="mt-10">
                    <p>{{ pictures.description }}</p>
                </div>
                <span v-show="pictures.showFav" style="color: red;" class="material-icons mt-10">
                    favorite
                </span>
            </div>
    `,
    methods: {
        showFavIcon(index){
            this.$emit('show-fav',index);
        },
        toggleModal(index){
            this.$emit('toggle-modal',index);
        }
    }
})