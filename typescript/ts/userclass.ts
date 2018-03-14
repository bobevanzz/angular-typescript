class User {
	id: number;
	username: string;
	password: string;
	fullname: string;
	phone: string;
	email: string;
	active: boolean;
	creditLimit: number;
	constructor (id: number, username:string, password: string,
				 fullname: string, phone: string, email: string,
				 active: boolean, creditLimit: number){
		this.id = id;
		this.username = username;
		this.password = password;
		this.fullname = fullname;
		this.phone = phone;
		this.email = email;
		this.active = active;
		this.creditLimit = creditLimit;
	}
	printOut(): void {
		console.log(`id=${this.id}, username =${this.username}, password=${this.password},fullname=${this.fullname}, phone = ${this.phone}, email = ${this.email},active=${this.active}, creditLimit=${this.creditLimit}`);		
	}	
	}
let usrs: User[] = [
	new User(1, "bobevanz","cloud123","Andrew Evans","513-264-2574", "bedrockballer@gmail.com", true, 100000),
	new User(2, "gdoud","doud123","Greg Doud","513-132-8745", "gdoud@gmail.com", true, 2000000),
	new User(3, "cbrown","brown123","Chris Brown","513-654-2698", "cbrown@gmail.com", true, 300000),
	new User(4, "nbucher","bucher123","Nate Bucher","513-965-2145", "nbucher@gmail.com", true, 400000),
	new User(5, "sbruce","bruce123","Steve Bruce","513-785-1973", "sbruce@gmail.com", true, 500000)
];
for(let user of usrs){
	user.printOut();
}