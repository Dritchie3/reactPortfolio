let project_list = [
	{
		image:
			'https://dritchie3.github.io/AboutMe/Images/getFed.png',
		title: 'GetFed Recipe App',
		des:
			"This is a front-Stack app using Jquery, Bootstrap, HTML, CSS and JSON for api calls.The purpose is to help one decide on a meal based on the ingredients in the cupboard. You get home and want to make a meal but don’t have an idea of what to make. This is where GetFed gets you started. Get recipes based on ingredients, items on hand, or restrictions. If you’re hungry, GetFed. This App utilized the 'Edemam.com api'. It allows one to enter as many ingredients as they like and the app will return a list of choices based on what can be made with the ingredients on hand.",
		tags: [ 'HTML', 'CSS', 'Bootstrap', 'Jquery' ],
		links: {
			launch: 'https://dritchie3.github.io/GetFedProject',
			github: 'https://github.com/Dritchie3/GetFed'
		}
	},
	{
		image:
			'https://dritchie3.github.io/AboutMe/Images/quarentainment.png',
		title: 'Quarentainment',
		des:
			"This is a Full Stack Project using ExpressJS and Passport (NodeJS) Development of a Social Media App. Passport allows for password authentication and hashing of the password and username for privacy. Also, it allows entered usernames, password and responses to be saved in a MySQL database. The purpose of this app is to allow a place for people to visit during the 'shut-in' time of being in quarantine, due to Covid-19.", 
		tags: [ 'HTML', 'CSS','Nodejs', 'express','Jquery','Bootstrap' ],
		links: {
			launch: 'https://quarintainment.herokuapp.com/',
			github: 'https://github.com/Dritchie3/Quarintainment'
		}
	},
	{  
		image:
			'https://dritchie3.github.io/AboutMe/Images/WorkoutTracker.png',
		title: 'Workout Tracker',
		des:
			"This is a Full Stack Project that allows a user to add an exercise and its parameters to be saved in the MongoDB using Mongoose.  It then will chart the daily data as well as the parameters (time of exercise, number of reps, etc). It also used 'Moment' to allow for real time and date recording of when the data/exercises were performed.",
		tags: [ 'HTML', 'CSS', 'Nodejs', 'Mongoose'],
		links: {
			launch: 'https://morning-everglades-96086.herokuapp.com/',
			github: 'https://github.com/Dritchie3/workoutTracker'
		}
	},
	{
		image:
			'https://dritchie3.github.io/AboutMe/Images/employeeDirectory.png',
		title: 'Employee Directory',
		des:
			"This is a Full-Stack React App.  It uses various components to create the various parts of the app.  Its purpose is to return a list of all the people in a bussiness.  It will then allow one to sort the people by first name, last name, gender, email and age.  It utilized the 'usestate' and 'useContext' hook.  Employees are propagated with the 'randomuser.me' api.",
		tags: [ 'HTML', 'CSS', 'React', 'JavaScript', 'JQuery' ],
		links: {
			launch: 'https://employee-directory-project-1.herokuapp.com/.',
			github: 'https://github.com/Dritchie3/emplyeeDirectory'
		}
	},
	{
		image:
			'https://dritchie3.github.io/AboutMe/Images/budgetTracker.png',
		title: 'Budget Tracker',
		des:
			"This is a PWA (Progressive Web App).  A PWA allows for on line and offline storage of saved data.  When the app first loads, it saves main files in cache allowing for this app to run in offline mode.  While offline, the entered data is stored in cache as well.  When the app goes back on line, it will upload the data to the MongoDB. It utilizes 'compression' in order to keep file sizes down, allowing for faster laods as well. This app allows for one to enter name and amount of expenses.  It then totals them and keeps a running budget total.",
		tags: ['HTML','express','Mongoose' ],
		links: {
			launch: 'https://budget-tracker-doug.herokuapp.com/',
			github: 'https://github.com/Dritchie3/budgetTracker'
		}
	},
	{
		image:
			'https://dritchie3.github.io/AboutMe/Images/weatherDash.png',
		title: 'Weather Dashboard',
		des:
			"This is a Front-Stack App that allows one to look up the weather anywhere in the world.  It uses 'openweathermap.org' api in order to return the temperature, humidity, wind, UV index, as well as a 5 day forcast.  It uses moment to keep the date and time of the request current as well as to request future weather for the 5 day forcast.  ",
		tags: ['HTML', 'CSS', 'JavaScript', 'Json' ],
		links: {
			launch: 'https://dritchie3.github.io/weatherDashboard/',
			github: 'https://github.com/Dritchie3/weatherDashboard'
		}
	}
];

export default project_list;
