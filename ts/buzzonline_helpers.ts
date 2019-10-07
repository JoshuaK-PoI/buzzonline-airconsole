export function* forIndex<T>(items: T[] | IterableIterator<T>) {
    let index: number = 0;
    for(const item of items) {
        yield {item, index};
        index++;
    }
}