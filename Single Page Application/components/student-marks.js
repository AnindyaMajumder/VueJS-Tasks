const studentMarks = [
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

const pageLength = 3;

const StudentMarks = {
    data() {
        return {
            page: 1,
            marks: studentMarks
        }
    },
    methods: {
        setPage(page) {
            if (page < 1 || !Number.isInteger(page) || page > this.pages) return;

            this.page = page;
        }
    },
    computed: {
        pages() {
            return Math.max(1, Math.ceil(this.marks.length / pageLength));
        },
        pagedUnits() {
            const start = (this.page - 1) * pageLength;
            return this.marks.slice(start, start + pageLength);
        }
    },
    template: `
        <h1>Student Marks</h1>
        <div class="table-responsive">
            <table class="table table-striped table-hover">
                <caption>Student names and their marks.</caption>
                <thead>
                    <tr>
                        <th scope="col" id="studHeading">Code</th>
                        <th scope="col" id="markHeading">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="m in pagedUnits">
                        <td headers="studHeading">{{m.name}}</td>
                        <td headers="markHeading">{{m.mark}}</td>
                    </tr>
                </tbody>
            </table>
            <span>
                <button class="btn btn-light" @click="setPage(page - 1)">Previous</button>
                <button class="btn btn-light" v-if="page > 2" @click="setPage(page - 2)">...</button>
                <button class="btn btn-light" v-if="page > 1" @click="setPage(page - 1)">{{page - 1}}</button>
                <button class="btn btn-primary">{{page}}</button>
                <button class="btn btn-light" v-if="page < pages" @click="setPage(page + 1)">{{page + 1}}</button>
                <button class="btn btn-light" v-if="page + 1 < pages" @click="setPage(page + 2)">...</button>
                <button class="btn btn-light" @click="setPage(page + 1)">Next</button>
            </span>
        </div>
    `
}

export default StudentMarks;