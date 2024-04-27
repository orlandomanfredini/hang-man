import { reactive } from 'vue'


export const store = reactive ({
    random: '',
    alphabet: [
        'a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w', 'x', 'y', 'z'
    ],
    currentLetter: '',
    matchLetter: [],
    
})