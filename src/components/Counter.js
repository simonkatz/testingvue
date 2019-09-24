export default {
    template: `
        <div>
            <span class="count" v-text="count"></span>
            
            <button class="increment" @click="count++">Increment</button>
        </div>
    `,
    data () {
        return {
            count: 0
        };
    }
}
