export const lengthAwareMixin = {
    computed: {
        computedLength() {
            return `${this.secondText} (${this.secondText.length})`;
        }
    }
}