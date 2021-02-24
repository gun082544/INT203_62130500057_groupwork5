app.component('photo-search',{
    data(){
        return{
            showSearchBoxVar: false,
            searchText: ''
        }
    },
    props:{
        pictures:{
            type: Array,
            require: true
        }
    },
    template:`
    <div class="flex w-96 h-10 mt-2 ">
            <input v-show="showSearchBoxVar" v-model="searchText" type="text" placeholder="search picture"
                class="bg-gray-200 text-gray-800 placeholder-gray-400  pl-2 py-1 w-96" />
            <button v-show="!showSearchBoxVar" @click="showSearchBox"
                class="bg-gray-200 w-auto flex justify-end items-center">
                <i class="material-icons">search</i>
            </button>
            <button v-show="showSearchBoxVar" @click="showSearchBox"
                class="bg-gray-200 w-auto flex justify-end items-center">
                <p>Cancel</p>
            </button>
        </div>
    `,
    methods:{
        showSearchBox() {
            this.showSearchBoxVar = !this.showSearchBoxVar;
            this.searchText='';
        }
    },
    watch:{
        searchText: function(){
            this.$emit('search-text',this.searchText)
        }
    }
})