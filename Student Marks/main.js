var studMarks = [
    { name: "Marry", mark: 80 },
    { name: "Nick", mark: 78 },
    { name: "Oscar", mark: 84 },
    { name: "Amy", mark: 90 },
    { name: "Bill", mark: 80 },
    { name: "Casey", mark: 78 },
    { name: "David", mark: 84 },
    { name: "Alice", mark: 85 },
    { name: "Benjamin ", mark: 72 },
    { name: "David", mark: 68 },
    { name: "Emily", mark: 77 },
    { name: "Frank", mark: 70 },
    { name: "Tylor", mark: 90 },
    { name: "Anderson ", mark: 79 },
    { name: "Garcia", mark: 88 },
    { name: "Wilson", mark: 75 },
    { name: "Lee", mark: 82 },
    { name: "Rodriguez", mark: 87 },
    { name: "Thomas", mark: 73 },
    { name: "Nathan", mark: 78 },
    { name: "Olivia", mark: 84 },
    { name: "Jackson", mark: 71 },
    { name: "Rachel", mark: 76 },
    { name: "Scott", mark: 81 },
    { name: "Nguyen", mark: 63 },
    { name: "William", mark: 80 },
];

new Vue({
    el: "#app",
    data: {
        students: studMarks,
        currentPage: 1,
        pageSize: 3,
    },
    computed: {
        paginatedStudents() {
            const startIndex = (this.currentPage - 1) * this.pageSize;
            const endIndex = startIndex + this.pageSize;
            return this.students.slice(startIndex, endIndex);
        },
        totalPages() {
            return Math.ceil(this.students.length / this.pageSize);
        },
    },
    methods: {
        changePage(pageNumber) {
            this.currentPage = pageNumber;
        },
    },
});
s;
