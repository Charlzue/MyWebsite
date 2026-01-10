/* Vue.js Gallery */
const { createApp } = Vue;

createApp({
    data() {
        return {
            currentFilter: 'All',
            categories: ['All', 'Leadership', 'Personal'],
            photos: [
                { src: 'college_circle.jpg', ratioClass: 'ratio-16-9', category: 'Personal', alt: 'College activities' },
                { src: 'jpcs-1.jpg', ratioClass: 'ratio-16-9', category: 'Leadership', alt: 'JPCS session' },
                { src: 'jpcs-2.jpg', ratioClass: 'ratio-2-1', category: 'Leadership', alt: 'JPCS members' },
                { src: 'toph-2.jpg', ratioClass: 'ratio-3-4', category: 'Personal', alt: 'Toph portrait' },
                { src: 'toph-4.jpg', ratioClass: 'ratio-3-4', category: 'Personal', alt: 'Toph candid' },
                { src: 'charlgelo.jpg', ratioClass: 'ratio-4-5', category: 'Personal', alt: 'Charl and Angelo' },
                { src: 'jpcs.jpg', ratioClass: 'ratio-3-2', category: 'Leadership', alt: 'JPCS board' },
                { src: 'socit.jpg', ratioClass: 'ratio-3-2', category: 'Leadership', alt: 'SoCIT community' },
                { src: 'charlgelo-2.jpg', ratioClass: 'ratio-3-2', category: 'Personal', alt: 'Charl and Angelo casual' },
                { src: 'toph-1.jpg', ratioClass: 'ratio-3-2', category: 'Personal', alt: 'Tech seminar' },
                { src: 'shs_circle.jpg', ratioClass: 'ratio-3-2', category: 'Personal', alt: 'SHS circle' },
                { src: 'charlgelo-1.jpg', ratioClass: 'ratio-4-3', category: 'Personal', alt: 'Leadership event with Angelo' },
                { src: 'jhs_circle.jpg', ratioClass: 'ratio-4-3', category: 'Personal', alt: 'JHS circle' }
            ]
        };
    },
    computed: {
        filteredImages() {
            if (this.currentFilter === 'All') {
                return this.photos;
            }
            return this.photos.filter(p => p.category === this.currentFilter);
        }
    }
}).mount('#gallery');