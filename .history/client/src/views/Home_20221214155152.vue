<template>
  <div class="home">
   <Search :categoriesMap="categoriesMap" :selectedCategories="selectedCategories" @toggle-category="toggleCategory($event)" @apply-search="keyword=$event"/>
   <Timeline :categoriesMap="categoriesMap" :items="itemsList"/>
  </div>
</template>

<script>
import axios from 'axios';
import Search from '@/components/Search.vue';
import Timeline from '@/components/Timeline.vue';

export default {
  name: 'home',
  components: {   
    Search,
    Timeline
  },
  data() {
    return {
      items: [],
      categoriesMap:{},
      selectedCategories:['all'],
      keyword: '',
    }
  },
  methods: {
   normalizeDate: (item) => {
          	return new Date(item.d_created * 1000);
      },
      firstLetterToUpperCase: (str) => {
          	const arr = str.split(" ");
        		for (var i = 0; i < arr.length; i++) {
      				arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
		  			}
        		return arr.join(" ");
      },
      setActions:(resourceType) => {
        const showScoreCategories = ['quiz', 'easy_quiz', 'challenge'];
        const showZoomCategories = ['quiz', 'easy_quiz', 'make_a_map', 'make_a_movie', 'word_play', 'draw_about_it'];
        const actions = {};
        if (showScoreCategories.indexOf(resourceType) > -1) {
          actions.score = true;
        }
        if (showZoomCategories.indexOf(resourceType) > -1) {
          actions.zoom = true;
        }
        return actions;
      },
      generateCategories() {
         this.items.forEach(item => {
         const strArray = item.resource_type.split('_');
         const categoryLabelArray = [];
         strArray.forEach(word => {
            const toUpperCase = word.length > 1 ? word.charAt(0).toUpperCase() : word;
            categoryLabelArray.push(toUpperCase + word.slice(1));
         });
         const categoryLabel = (categoryLabelArray.indexOf('Word') > -1 || categoryLabelArray.indexOf('Make') > -1) ? categoryLabelArray.join('-') :  categoryLabelArray.join(' ');
         this.categoriesMap[item.resource_type] = categoryLabel;
      });
      },
      toggleCategory(categoryId) {
         if (categoryId == 'all') {
            this.selectedCategories = ['all'];
            return;
         }
         const allIndex = this.selectedCategories.indexOf('all');
         if (allIndex > -1) {
            this.selectedCategories.splice(allIndex, 1);
         }
         const categoryIndex = this.selectedCategories.indexOf(categoryId);
         if (categoryIndex > -1) {
            this.selectedCategories.splice(categoryIndex, 1);
            if (this.selectedCategories.length === 0) {
               this.selectedCategories.push('all');
            }
         } else {
            this.selectedCategories.push(categoryId);
         }
      },
      applySearch($event) {
         console.log('applySearch', $event);
      }
  },
  async beforeRouteEnter(to, from, next) {
     const response = await axios.get('http://localhost:3000/activities/v1');
      next(vm => {
         vm.categoriesMap = {};
         vm.items = response.data.sort((a,b) => b.d_created - a.d_created);
         vm.items = response.data.map(item => {
           return  {
           ...item,
           actions: vm.setActions(item.resource_type),
           topic_data: {...item.topic_data, name:vm.firstLetterToUpperCase(item.topic_data.name), 
            icon_path: require(`../../../assets/topics/adalovelace.png`)
            }            
         } 
         });
         vm.generateCategories(); 
      });
  },
  computed: {
   itemsList() {
      if (this.selectedCategories.indexOf('all') > -1) {
         if (this.keyword === '') {
            return this.items;
         } else {
            return this.items.filter(item => (item.topic_data.name.toLowerCase() + ' ' + item.resource_type.toLowerCase()).includes(this.keyword.toLowerCase()));
         }
      }
 
      return this.items.filter(item => this.selectedCategories.indexOf(item.resource_type) > -1 &&  (item.topic_data.name.toLowerCase() + ' ' + item.resource_type.toLowerCase()).includes(this.keyword.toLowerCase()));
      }
   }
}
</script>
