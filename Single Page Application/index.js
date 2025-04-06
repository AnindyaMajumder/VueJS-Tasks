import NameTest from "./components/name.js";
import Post from './components/post.js';
import StudentMarks from "./components/student-marks.js";

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(), 
	routes: [
	{
		path: '/',
		component: NameTest,
		name:"name"
	},
	{
		path: '/post',
        component: Post,
		name:"post"
	},
	{
		path: '/marks',
		component: StudentMarks,
		name: 'marks'
	}
  ]
});

const app = Vue.createApp();

app.use(router);
app.mount('#app');

