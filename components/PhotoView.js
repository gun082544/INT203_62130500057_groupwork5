app.component('photo-view',{
    props:{
        pictures:{
            type: Object,
            require: true
        },
        index:{
            type: Number,
            require: true
        }
    },
    template: `
    <div v-show="pictures.showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none flex flex-col bg-black bg-opacity-95">
                <button @click="toggleModal(index)" class="material-icons orange bg-transparent w-8 h-8 block outline-none focus:outline-none fill-current">
                    highlight_off
                </button>
                <!--body-->
                <div class="relative p-6 flex-auto w-9/12 mx-auto">
                    <img v-bind:src="pictures.path">
                </div>
            </div>
    `,
    methods: {
        toggleModal(index){
            this.$emit('toggle-modalview',index);
        }
    }
})