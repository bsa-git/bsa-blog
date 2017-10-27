class Pagination {
    constructor(options) {
        this.items = options.items;
        this.itemsPerPage = parseInt(options.total ? options.total : 1);
        // console.log('constructor:itemsPerPage: ', this.itemsPerPage);
    }

    totalPages() {
        const totalItems = _.filter(this.items, function (o) {
            return !!o.to;
        });
        return Math.ceil(totalItems.length / this.itemsPerPage);
    }

    getItems(page) {
        const maxItem = page * this.itemsPerPage;
        const minItem = maxItem - this.itemsPerPage;
        let indexItem = 0;


        const filterItems = _.filter(
            this.items,
            function (o) {
                const isItem = !!o.to;
                const isHeader = !!o.header;
                const isDivider = !!o.divider;

                const isIndexHeader = isHeader && indexItem < maxItem;
                const isIndexDivider = isDivider && indexItem < maxItem;

                indexItem = isItem ? (indexItem + 1) : indexItem;
                const isIndexItem = (isItem || isIndexDivider) && (indexItem > minItem && indexItem <= maxItem);

                return isIndexHeader || isIndexItem;
            });

        return _.filter(
            filterItems,
            function (o, i, c) {
                const isItem = !!o.to;
                const isHeader = !!o.header;
                const isDivider = !!o.divider;

                const nextIndex = i + 1;
                const nextObject = c[nextIndex];
                const isNextItem = isHeader && !!nextObject.to;
                return isNextItem || isItem || isDivider;
            });
    }
}


export default Pagination
